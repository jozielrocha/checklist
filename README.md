# 📸 Checklist Técnico FTTH

Aplicativo web para técnicos em campo: guia o atendimento por categoria, tira as fotos exigidas e salva cada uma **no próprio celular**, já com o **nome padronizado** e uma **marca d'água** com protocolo, localização (GPS), data e hora.

🔗 **Acesse:** https://SEU-USUARIO.github.io/checklist/ <!-- troque pelo seu link -->

---

## O que o app faz

- Checklists por tipo de atendimento (Ativação FTTH, Mudança de Cômodo, Upgrade de Plano, etc.).
- Cada item tem os botões **📷 Foto** (câmera) e **🖼️ Galeria** (escolher foto já salva no aparelho).
- **Várias fotos por item**, com nome em sequência.
- **Fotos extras** em cada categoria, com nome livre digitado pelo técnico.
- Marca d'água na imagem: **OS/Protocolo**, **GPS**, **data/hora** e **local (item)**.
- **Histórico de protocolos**: mostra protocolo, categoria e andamento, e ao selecionar já abre a categoria certa.
- **Funciona offline** depois de instalado (PWA).
- Barra de progresso por categoria.

## Como usar (técnico)

1. **Primeira vez:** abra o link no **Chrome** ou **Safari** (não pelo navegador interno do WhatsApp), **com internet**, e toque em *Instalar app* / *Adicionar à tela inicial*.
2. Permita o acesso à **câmera** e à **localização** quando o navegador pedir. Mantenha a **Localização do aparelho ligada**.
3. Digite o **Nº da OS / Protocolo** (ou escolha um do histórico).
4. Escolha o tipo de atendimento.
5. Em cada item, toque em **Foto** ou **Galeria**. A imagem é salva na pasta de **Downloads** do aparelho.
6. No fim da lista, use **Fotos Extras** para o que não estiver previsto (digite o nome antes de tirar a foto).

### Nome dos arquivos

```
ITEM_PROTOCOLO_CATEGORIA.jpg
ITEM_(2)_PROTOCOLO_CATEGORIA.jpg      ← segunda foto do mesmo item
```

Exemplo: `ANEXO_IPV6_123456_ATIVACAO_FTTH.jpg`

> Fotos escolhidas da **Galeria** usam a data do arquivo; o GPS gravado é o do local onde o aparelho está **naquele momento** (a marca d'água indica "GPS atual").

## Privacidade

- O app roda **100% no aparelho**. Nenhuma foto, protocolo ou localização é enviada a servidores.
- O progresso e o histórico ficam guardados **no navegador de cada aparelho**. Limpar os dados do navegador apaga esse histórico (as fotos já salvas em Downloads continuam).

## Para quem mantém o projeto

### Editar itens e categorias

Tudo fica no arquivo **`checklists.js`** (não é preciso mexer no `index.html`). As instruções estão no topo do arquivo:

- remover item → apague a linha;
- adicionar item → crie uma linha nova, entre aspas e com vírgula;
- nova categoria → copie um bloco e troque chave, título, ícone e itens.

Depois: *commit* e *push*. Em 1 a 2 minutos o GitHub Pages publica, e os aparelhos se atualizam ao abrir o app com internet.

### Estrutura dos arquivos

| Arquivo | Função |
|---|---|
| `index.html` | O aplicativo (tela, câmera/galeria, marca d'água, GPS, histórico) |
| `checklists.js` | Categorias e itens de cada checklist |
| `sw.js` | Service worker: permite usar offline e atualizar sozinho |
| `manifest.json` | Dados para instalar como app (nome, cores, ícones) |
| `icon-*.png` | Ícones do app |

### Publicação (GitHub Pages)

*Settings → Pages → Deploy from a branch → `main` / `(root)`*.

### Requisitos e limitações

- O GPS só funciona em página **https** (o GitHub Pages já fornece).
- Em locais fechados, o GPS pode demorar a conectar.
- Cada aparelho guarda o próprio progresso; não há sincronização entre aparelhos.

## Licença e créditos

© 2026 — Desenvolvido por **Joziel Rocha**.

Projeto de código aberto sob a **[Licença MIT](LICENSE)**: você pode usar, copiar, modificar e distribuir, inclusive em uso comercial, desde que **mantenha o aviso de copyright e a licença** em todas as cópias.

Se usar ou adaptar este projeto, por favor **mantenha o crédito ao autor**. 🙏
