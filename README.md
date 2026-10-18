# 📸 Checklist Técnico FTTH

Aplicativo web para técnicos em campo: guia o atendimento por categoria, tira as fotos exigidas e salva cada uma **no próprio celular**, já com o **nome padronizado** e uma **marca d'água** com protocolo, localização (GPS), data e hora.

🔗 **Acesse:** https://SEU-USUARIO.github.io/checklist/ <!-- troque pelo seu link -->

---

## O que o app faz

- Checklists por tipo de atendimento (Ativação FTTH, Mudança de Cômodo, Upgrade de Plano, etc.).
- Cada item tem os botões **📷 Foto** (câmera) e **🖼️ Galeria** (escolher foto já salva no aparelho).
- **Várias fotos por item**, com nome em sequência.
- **Fotos extras** em cada categoria, com nome livre digitado pelo técnico.
- Marca d'água na imagem: **OS/Protocolo**, **GPS**, **data/hora**, **local (item)** e uma etiqueta de origem: **TIRADA NO APP** ou **DA GALERIA**.
- **Aviso "✓ Salvo: nome-do-arquivo"** a cada foto.
- **Finalizar / conferir pendências**: lista os itens que ainda estão sem foto antes de sair.
- **Refazer**: zera a contagem de um item (ou remove um extra da lista) quando a foto saiu errada.
- **Histórico de protocolos**: mostra protocolo, categoria e andamento, e ao selecionar já abre a categoria certa. Protocolos sem uso há mais de **7 dias** saem do histórico automaticamente.
- **Aviso de navegador interno**: se o app for aberto dentro do Instagram/Facebook (onde câmera, galeria e GPS falham), aparece um aviso para abrir no Chrome ou Safari.
- **Botão voltar do celular** funciona como "Voltar ao menu".
- **Fotos otimizadas**: o lado maior é reduzido para até 2048 px, o que deixa o arquivo leve e evita falhas com câmeras de 50 MP. A marca d'água se ajusta ao tamanho da imagem.
- **Contagem anônima de acessos** (sem cookies e sem dados pessoais), que pode ser desativada.
- **Aviso de nova versão**: quando há atualização, aparece uma faixa "Nova versão disponível" com o botão *Atualizar*.
- **Funciona offline** depois de instalado (PWA).
- Barra de progresso por categoria.

## Como usar (técnico)

1. **Primeira vez:** abra o link no **Chrome** ou **Safari** (não pelo navegador interno do WhatsApp), **com internet**, e toque em *Instalar app* / *Adicionar à tela inicial*.
2. Permita o acesso à **câmera** e à **localização** quando o navegador pedir. Mantenha a **Localização do aparelho ligada**.
3. Digite o **Nº da OS / Protocolo** (ou escolha um do histórico).
4. Escolha o tipo de atendimento.
5. Em cada item, toque em **Foto** ou **Galeria**. A imagem é salva na pasta de **Downloads** do aparelho.
6. No fim da lista, use **Fotos Extras** para o que não estiver previsto (digite o nome antes de tirar a foto).
7. Toque em **Finalizar / conferir pendências** para ver se falta alguma foto.
8. Tirou a foto errada? Em **↺ Refazer**, a contagem do item volta a zero (as fotos já salvas no celular não são apagadas).

### Nome dos arquivos

```
ITEM_PROTOCOLO_CATEGORIA.jpg
ITEM_(2)_PROTOCOLO_CATEGORIA.jpg      ← segunda foto do mesmo item
```

Exemplo: `ANEXO_IPV6_123456_ATIVACAO_FTTH.jpg`

> Fotos escolhidas da **Galeria** recebem a etiqueta **DA GALERIA**, usam a data do arquivo e gravam o GPS do local onde o aparelho está **naquele momento** (a marca d'água indica "GPS atual"). Fotos feitas pelo app recebem **TIRADA NO APP**.

## Privacidade

- As **fotos, o protocolo e a localização (GPS) ficam só no aparelho**: o app não envia nada disso a nenhum servidor. As fotos são salvas na pasta de Downloads.
- O progresso e o histórico ficam guardados **no navegador de cada aparelho** e são apagados automaticamente após 7 dias sem uso do protocolo. Limpar os dados do navegador também apaga o histórico (as fotos já salvas em Downloads continuam).
- O app **conta acessos de forma anônima** (veja a seção abaixo).

### Estatísticas de uso (anônimas)

Este app conta acessos e algumas ações de forma **anônima e agregada**, apenas para avaliar a aceitação da ferramenta. Não é usado para identificar, acompanhar ou monitorar nenhum colaborador.

**O que é contado**

- Quantas vezes o app foi aberto (visitas), com informações gerais do acesso, como navegador, sistema e tamanho de tela.
- Ações genéricas, de uma lista fixa: `checklist-iniciado` (primeira foto de um protocolo/categoria), `foto-salva`, `checklist-finalizado` (todas as fotos feitas), `app-instalado`, `navegador-interno` (app aberto dentro do navegador de uma rede social) e a versão em uso (`versao-X.Y.Z`).

**O que nunca é enviado**

- Número da OS/protocolo, nomes, fotos, localização (GPS) ou qualquer texto digitado.
- O código só aceita os eventos da lista fixa acima; qualquer outro nome é ignorado.

**Como funciona**

- Usa o [GoatCounter](https://www.goatcounter.com), um contador de visitas de código aberto, sem cookies.
- Respeita a configuração "Não rastrear" do navegador.
- O código do app que envia os eventos está neste repositório e pode ser conferido em `analytics.js` e `analytics-config.js`. O script do contador (`count.js`) é carregado dos servidores do GoatCounter.
- Para detalhes sobre o que o GoatCounter armazena, consulte a [política de privacidade](https://www.goatcounter.com/privacy) dele.
- Sem internet, nada é contado e o app funciona normalmente.

**Como desativar**

Em `analytics-config.js`, troque `enabled: true` por `enabled: false`. Se você fez um fork do projeto, troque também o `endpoint` pelo seu próprio código do GoatCounter, para não misturar as estatísticas com as do projeto original.

## Para quem mantém o projeto

### Editar itens e categorias

Tudo fica no arquivo **`checklists.js`** (não é preciso mexer no `index.html`). As instruções estão no topo do arquivo:

- remover item → apague a linha;
- adicionar item → crie uma linha nova, entre aspas e com vírgula;
- nova categoria → copie um bloco e troque chave, título, ícone e itens.

Depois: *commit* e *push*. Em 1 a 2 minutos o GitHub Pages publica, e os aparelhos se atualizam ao abrir o app com internet.

### Avisar os aparelhos de uma nova versão

A cada atualização publicada, aumente o número em `VERSAO` no `sw.js` (ex.: `"1.0.0"` → `"1.0.1"`) e use o mesmo número em `appVersion` no `analytics-config.js`. Os aparelhos que estiverem com o app aberto mostram a faixa **"Nova versão disponível"**. Sem isso, a atualização ainda chega, mas só na próxima vez que o app for aberto com internet.

### Ativar o contador de acessos

1. Crie uma conta gratuita no [GoatCounter](https://www.goatcounter.com) (o código do seu site é a parte antes de `.goatcounter.com`).
2. Em `analytics-config.js`, troque `SEU-CODIGO` pelo seu código. Enquanto o texto original estiver lá, o contador fica desligado.
3. Faça o commit e abra o app publicado: a visita aparece no painel. Em teste local (arquivo aberto no computador) o GoatCounter não conta por padrão.
4. Confira os termos do plano gratuito do GoatCounter (uso não comercial) caso a empresa adote o app oficialmente.

### Tamanho das fotos

Em `index.html`, procure `LADO_MAXIMO_FOTO` (padrão: 2048 px no lado maior). Use `0` para manter o tamanho original da câmera.

### Ajustar o tempo do histórico

Em `index.html`, procure `DIAS_HISTORICO` (padrão: 7).

### Estrutura dos arquivos

| Arquivo | Função |
|---|---|
| `index.html` | O aplicativo (tela, câmera/galeria, marca d'água, GPS, histórico) |
| `checklists.js` | Categorias e itens de cada checklist |
| `sw.js` | Service worker: uso offline, atualização e número da versão |
| `analytics.js` / `analytics-config.js` | Contador anônimo de acessos (lista fixa de eventos) e sua configuração |
| `manifest.json` | Dados para instalar como app (nome, cores, ícones) |
| `icon-*.png` | Ícones do app |

### Publicação (GitHub Pages)

*Settings → Pages → Deploy from a branch → `main` / `(root)`*.

### Requisitos e limitações

- O GPS só funciona em página **https** (o GitHub Pages já fornece).
- Em locais fechados, o GPS pode demorar a conectar.
- Cada aparelho guarda o próprio progresso; não há sincronização entre aparelhos.
- No iPhone (Safari), as fotos costumam ir para o app **Arquivos** (pasta Downloads) e não para o app Fotos, e o navegador pode pedir confirmação a cada download. A instalação na tela inicial é manual (compartilhar → *Adicionar à Tela de Início*).
- Fotos da galeria em formato HEIC podem não abrir em alguns navegadores; nesse caso use a câmera pelo app ou uma foto em JPG.

## Licença e créditos

© 2026 — Desenvolvido por **Joziel Rocha**.

Projeto de código aberto sob a **[Licença MIT](LICENSE)**: você pode usar, copiar, modificar e distribuir, inclusive em uso comercial, desde que **mantenha o aviso de copyright e a licença** em todas as cópias.

Se usar ou adaptar este projeto, por favor **mantenha o crédito ao autor**. 🙏
