// Service worker: guarda o app no aparelho para funcionar sem internet.
// index.html e checklists.js são buscados na rede primeiro (limite de 4 s) e usam a cópia
// do aparelho se não houver sinal.
// AO PUBLICAR UMA ATUALIZAÇÃO: aumente o número em VERSAO (ex.: "1.0.1").
// Isso faz aparecer o aviso "Nova versão disponível" nos aparelhos que estiverem com o app aberto.
// Mantenha o mesmo número em appVersion no analytics-config.js.
const VERSAO = "1.0.0";
const CACHE = "checklist-ftth-" + VERSAO;
const ARQUIVOS = [
  "./",
  "./index.html",
  "./checklists.js",
  "./analytics-config.js",
  "./analytics.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(chaves => Promise.all(chaves.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function redePrimeiro(req) {
  const cache = await caches.open(CACHE);
  try {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 4000);
    const resp = await fetch(req, { cache: "no-cache", signal: ctl.signal });
    clearTimeout(t);
    if (resp && resp.ok) cache.put(req, resp.clone());
    return resp;
  } catch (err) {
    const copia = (await cache.match(req, { ignoreSearch: true })) ||
      (req.mode === "navigate" ? await cache.match("./index.html") : undefined);
    return copia || Response.error();
  }
}

async function cachePrimeiro(req) {
  const cache = await caches.open(CACHE);
  const copia = await cache.match(req, { ignoreSearch: true });
  if (copia) return copia;
  const resp = await fetch(req);
  if (resp && resp.ok) cache.put(req, resp.clone());
  return resp;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  const dinamico = req.mode === "navigate" || /(\/|index\.html|manifest\.json|(checklists|analytics|analytics-config)\.js)$/.test(url.pathname);
  e.respondWith(dinamico ? redePrimeiro(req) : cachePrimeiro(req));
});
