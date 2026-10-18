/*
 * Configuração do contador anônimo de acessos (GoatCounter).
 *
 * - Para DESATIVAR: coloque enabled: false (ou deixe endpoint vazio).
 * - Se você fez um FORK deste projeto: troque o endpoint pelo SEU código do
 *   GoatCounter, para não misturar os números com os do projeto original.
 *
 * Nada aqui é secreto: o endereço do contador é público por natureza.
 */
window.ANALYTICS_CONFIG = {
  enabled: true,
  endpoint: "https://jozielrocha.goatcounter.com/count",
  scriptSrc: "https://gc.zgo.at/count.js",
  // Versão do app (usada só para saber quantos já atualizaram).
  // Mantenha igual ao VERSAO do sw.js a cada atualização publicada.
  appVersion: "1.0.0"
};
