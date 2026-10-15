// Service worker: guarda o app no aparelho para funcionar sem internet.
// Ao publicar uma versão nova, aumente o número em VERSAO.
const VERSAO = "v2";
const CACHE = "checklist-ftth-" + VERSAO;
const ARQUIVOS = [
  "./",
  "./index.html",
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

// Abre do cache (rápido/offline) e atualiza em segundo plano quando há internet.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(emCache => {
      const rede = fetch(e.request).then(resp => {
        if (resp && resp.ok && new URL(e.request.url).origin === location.origin) {
          const copia = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, copia));
        }
        return resp;
      }).catch(() => emCache || (e.request.mode === "navigate" ? caches.match("./index.html") : undefined));
      return emCache || rede;
    })
  );
});
