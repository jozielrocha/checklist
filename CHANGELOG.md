# Histórico de versões

## v1.0.0 — Outubro/2026

Primeira versão pública.

### Funcionalidades
- Checklists por tipo de atendimento, com **Foto** (câmera) e **Galeria** em cada item.
- **Várias fotos por item**, com nome em sequência (`ITEM`, `ITEM_(2)`, ...).
- **Fotos extras** com nome livre, seguindo a mesma regra de nomes.
- Nome do arquivo no padrão `ITEM_PROTOCOLO_CATEGORIA.jpg`.
- Marca d'água com protocolo, GPS, data/hora, local e **origem da foto** (TIRADA NO APP / DA GALERIA).
- **Aviso de "Salvo"** com o nome do arquivo a cada foto.
- **Finalizar / conferir pendências**: lista os itens ainda sem foto.
- **Refazer**: zera a contagem de um item ou remove um extra da lista.
- **Histórico de protocolos** com categoria e andamento, que já abre a categoria ao selecionar; protocolos sem uso há 7 dias saem sozinhos.
- **Aviso de nova versão** (faixa "Nova versão disponível").
- Funciona **offline** depois de instalado (PWA).
- Listas de itens e categorias em arquivo separado (`checklists.js`), fáceis de editar.
- Licença **MIT**.
