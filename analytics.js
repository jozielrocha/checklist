/*
 * Contador anônimo de acessos e ações (GoatCounter).
 *
 * Princípios:
 *  - Só conta ESTE tipo de coisa: abriu o app, salvou foto, finalizou checklist.
 *  - NUNCA envia protocolo/OS, nomes, fotos, GPS ou qualquer texto digitado.
 *  - Só aceita eventos de uma lista fixa (ALLOWED). Qualquer outro nome é
 *    ignorado, então não há como um dado pessoal "vazar" por engano.
 *  - Respeita o "Não rastrear" (Do Not Track) do navegador.
 *  - Sem cookies.
 *
 * Uso no app:   track('foto-salva');
 */
(function () {
  "use strict";

  var cfg = window.ANALYTICS_CONFIG || {};

  // Lista fixa de eventos permitidos
  var ALLOWED = [
    "checklist-iniciado",
    "foto-salva",
    "checklist-finalizado",
    "app-instalado"
  ];
  var ALLOWED_PATTERNS = [/^versao-[0-9]+(\.[0-9]+)*$/];

  function isAllowed(name) {
    if (typeof name !== "string") return false;
    if (ALLOWED.indexOf(name) !== -1) return true;
    for (var i = 0; i < ALLOWED_PATTERNS.length; i++) {
      if (ALLOWED_PATTERNS[i].test(name)) return true;
    }
    return false;
  }

  var dnt = navigator.doNotTrack === "1" || window.doNotTrack === "1";
  var active =
    cfg.enabled === true &&
    !!cfg.endpoint &&
    cfg.endpoint.indexOf("SEU-CODIGO") === -1 &&
    !dnt;

  var queue = [];
  var loaded = false;

  function send(name) {
    if (window.goatcounter && typeof window.goatcounter.count === "function") {
      window.goatcounter.count({ path: name, title: name, event: true });
    }
  }

  window.track = function (name) {
    if (!active || !isAllowed(name)) return;
    if (loaded) send(name);
    else if (queue.length < 50) queue.push(name);   // sem internet/bloqueado: não deixa a fila crescer
  };

  if (!active) return;

  // Carrega o script do contador (a visita à página é contada automaticamente)
  var s = document.createElement("script");
  s.async = true;
  s.src = cfg.scriptSrc || "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", cfg.endpoint);
  s.onload = function () {
    loaded = true;
    while (queue.length) send(queue.shift());
  };
  document.head.appendChild(s);

  // Quantos já estão na versão mais nova
  if (cfg.appVersion) window.track("versao-" + cfg.appVersion);

  // Instalação na tela inicial (PWA), se o app for instalável
  window.addEventListener("appinstalled", function () {
    window.track("app-instalado");
  });
})();
