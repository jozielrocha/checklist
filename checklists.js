/* =====================================================================
   LISTAS DO CHECKLIST  —  é AQUI que você adiciona/remove itens.
   Não precisa mexer no index.html.

   COMO EDITAR
   - Remover um item: apague a linha com o nome dele.
   - Adicionar um item: crie uma linha nova, entre aspas e terminando
     em vírgula (a última linha de cada lista NÃO leva vírgula).
       Ex.:  "FRENTE CASA CLIENTE",
   - A ordem das linhas é a ordem na tela.
   - Nova categoria: copie um bloco inteiro ("chave": { ... }), troque a
     chave (minúsculas, sem espaço/acentos, ex.: "troca_equipamento"),
     o título, o ícone e os itens.
   - O nome do item vira parte do nome do arquivo da foto.
   - Se renomear um item, o progresso antigo desse item não é reaproveitado.
   - Depois de editar: Commit + Sync no VS Code e abra o link para conferir.
   - Cuidado com aspas e vírgulas: se faltar uma, a lista não carrega e
     o app mostra um aviso na tela.
   ===================================================================== */

const checklistsData = {
  "ativacao_ftth": {
    "title": "ATIVAÇÃO FTTH",
    "icon": "🌐",
    "items": [
      "ANEXO IPV6 e IPv4",
      "ANEXO EQUIPAMENTO INSTALADO",
      "ANEXO ORGANIZAÇÃO CTO",
      "ANEXO PING",
      "ANEXO SINAL NA CTO",
      "ANEXO TESTE DE VELOCIDADE",
      "ASSINATURA DO CLIENTE",
      "DESLOCAMENTO",
      "LANÇADO CONECTOR",
      "LANÇADO DROP",
      "LANÇADO ESTICADOR",
      "LANÇADO MIGUELÃO",
      "ALOCAÇÃO DO EQUIPAMENTO",
      "RELATO",
      "ANEXO SINAL NO CLIENTE",
      "ANEXO SOBREPOSIÇÃO SINAL WIRELESS",
      "ANEXO FIRMWARE",
      "CONFIGURAÇÃO TR069"
    ],
    "criterios": [
      "Equipamento alocado e instalado corretamente",
      "Organização da CTO e sinal dentro do padrão",
      "Sinal no cliente e Ping validados",
      "Teste de velocidade e IPv6 funcionais",
      "Firmware atualizado e TR-069 configurado",
      "Materiais e lançamentos informados",
      "Assinatura e relato técnico coletados"
    ]
  },
  "mudanca_comodo": {
    "title": "MUDANÇA DE CÔMODO",
    "icon": "🏠",
    "items": [
      "RELATO",
      "ALOCAÇÃO DO EQUIPAMENTO",
      "DESLOCAMENTO",
      "ASSINATURA DO CLIENTE",
      "ANEXO TESTE DE VELOCIDADE",
      "ANEXO SOBREPOSIÇÃO SINAL WIRELESS",
      "ANEXO EQUIPAMENTO INSTALADO",
      "ANEXO FIRMWARE",
      "LANÇADO MATERIAL (DIVERSOS)"
    ],
    "criterios": [
      "Equipamento alocado e instalado corretamente",
      "Teste de velocidade e sinal no cliente aprovados",
      "Sobreposição wireless e Firmware validados",
      "Materiais lançados e Deslocamento informado",
      "Relato técnico e Assinatura coletados"
    ]
  },
  "lenta_oscilacao": {
    "title": "LENTA / OSCILAÇÃO",
    "icon": "📶",
    "items": [
      "ANEXO FIRMWARE",
      "ANEXO PING",
      "ANEXO SOBREPOSIÇÃO SINAL WIRELESS",
      "ANEXO TESTE DE VELOCIDADE",
      "ANEXO TRACEROUTE",
      "ASSINATURA DO CLIENTE",
      "DESLOCAMENTO",
      "RELATO",
      "ANEXO IPV6",
      "ANEXO SINAL NO CLIENTE",
      "CONFIGURAÇÃO TR069"
    ],
    "criterios": [
      "Todos os anexos obrigatórios enviados",
      "Traceroute sem perda excessiva",
      "Ping e Sinal dentro do padrão operacional",
      "IPv6 e TR-069 validados",
      "Relato técnico e Assinatura coletados"
    ]
  },
  "mudanca_endereco": {
    "title": "MUDANÇA DE ENDEREÇO",
    "icon": "📍",
    "items": [
      "RELATO",
      "LANÇADO DROP",
      "LANÇADO ESTICADOR",
      "LANÇADO MIGUELÃO",
      "LANÇADO CONECTOR",
      "DESLOCAMENTO",
      "ASSINATURA DO CLIENTE",
      "ANEXO ORGANIZAÇÃO CTO",
      "ANEXO SINAL NO CLIENTE",
      "ANEXO SOBREPOSIÇÃO SINAL WIRELESS",
      "ANEXO SINAL NA CTO",
      "ANEXO TESTE DE VELOCIDADE",
      "ANEXO FIRMWARE",
      "ANEXO IPV6",
      "ANEXO PING",
      "ANEXO EQUIPAMENTO INSTALADO",
      "CONFIGURAÇÃO TR-069"
    ],
    "criterios": [
      "Relato técnico e Assinatura do cliente coletados",
      "Equipamento devidamente instalado",
      "Organização e Sinal na CTO/Cliente dentro do padrão",
      "Teste de velocidade, Ping e IPv6 funcionais",
      "Firmware e TR-069 configurados",
      "Lançamentos de materiais devidamente registrados"
    ]
  },
  "pre_instalacao": {
    "title": "PRÉ-INSTALAÇÃO",
    "icon": "📡",
    "items": [
      "ANEXO ORGANIZAÇÃO CTO",
      "ANEXO SINAL NA CTO",
      "DESLOCAMENTO",
      "LANÇADO DROP",
      "LANÇADO ESTICADOR",
      "LANÇADO CONECTOR",
      "RELATO",
      "ASSINATURA DO CLIENTE"
    ],
    "criterios": [
      "Organização e Sinal na CTO dentro do padrão",
      "Todos os lançamentos de rede realizados",
      "Relato técnico preenchido",
      "Assinatura do cliente coletada",
      "Deslocamento e anexos obrigatórios enviados"
    ]
  },
  "ponto_adicional": {
    "title": "PONTO ADICIONAL",
    "icon": "➕",
    "items": [
      "RELATO",
      "ALOCAÇÃO DO EQUIPAMENTO",
      "DESLOCAMENTO",
      "ASSINATURA DO CLIENTE",
      "ANEXO TESTE DE VELOCIDADE",
      "ANEXO SOBREPOSIÇÃO SINAL WIRELESS",
      "ANEXO EQUIPAMENTO INSTALADO",
      "ANEXO FIRMWARE",
      "ANEXO PING",
      "LANÇADO MATERIAL (DIVERSOS)"
    ],
    "criterios": [
      "Equipamento devidamente alocado e instalado",
      "Firmware atualizado e Ping/Velocidade ok",
      "Sobreposição Wireless validada",
      "Materiais utilizados e Deslocamento lançados",
      "Assinatura e Relato coletados"
    ]
  },
  "retirada": {
    "title": "RETIRADA DE EQUIPAMENTO",
    "icon": "🚚",
    "items": [
      "ASSINATURA DO CLIENTE",
      "DESLOCAMENTO",
      "RELATO",
      "REMOÇÃO DO PATRIMÔNIO"
    ],
    "criterios": [
      "Assinatura do cliente coletada",
      "Deslocamento informado",
      "Relato técnico preenchido",
      "Remoção do patrimônio realizada e conferida"
    ]
  },
  "nao_conecta": {
    "title": "NÃO CONECTA",
    "icon": "❌",
    "items": [
      "RELATO",
      "ANEXO FIRMWARE",
      "ANEXO SINAL NO CLIENTE",
      "ANEXO PING",
      "DESLOCAMENTO",
      "ANEXO TESTE DE VELOCIDADE",
      "LANÇADO MATERIAL (DIVERSOS)",
      "ANEXO SOBREPOSIÇÃO SINAL WIRELESS",
      "ASSINATURA DO CLIENTE",
      "ANEXO SINAL NA CTO",
      "ANEXO ORGANIZAÇÃO CTO",
      "ANEXO IPV6",
      "CONFIGURAÇÃO TR-069"
    ],
    "criterios": [
      "Sinal na CTO e Cliente validados",
      "Organização da CTO anexada",
      "Ping, Velocidade e IPv6 checados",
      "Firmware e TR-069 reconfigurados",
      "Materiais e Relato devidamente registrados"
    ]
  },
  "upgrade": {
    "title": "UPGRADE DE PLANO",
    "icon": "⬆️",
    "items": [
      "ALOCAÇÃO DO EQUIPAMENTO",
      "ANEXO FIRMWARE",
      "ANEXO EQUIPAMENTO INSTALADO",
      "ANEXO IPV6",
      "ANEXO PING",
      "ANEXO SINAL NO CLIENTE",
      "ANEXO SOBREPOSIÇÃO SINAL WIRELESS",
      "ANEXO TESTE DE VELOCIDADE",
      "ASSINATURA DO CLIENTE",
      "CONFIGURAÇÃO TR-069",
      "DESLOCAMENTO",
      "RELATO",
      "REMOÇÃO DO PATRIMÔNIO"
    ],
    "criterios": [
      "Equipamento antigo removido e novo alocado/instalado",
      "Firmware, IPv6, Ping e Sinal validados",
      "Teste de velocidade aprovado no novo plano",
      "TR-069 e Sobreposição Wireless validados",
      "Relato técnico e Assinatura coletados"
    ]
  },
  "item_adicional": {
    "title": "ITEM ADICIONAL",
    "icon": "📦",
    "items": [
      "ALOCAÇÃO DO EQUIPAMENTO",
      "ANEXO EQUIPAMENTO INSTALADO",
      "RELATO",
      "DESLOCAMENTO",
      "ASSINATURA DO CLIENTE",
      "LANÇADO MATERIAL (DIVERSOS)"
    ],
    "criterios": [
      "Equipamento alocado e instalado corretamente",
      "Relato técnico preenchido",
      "Deslocamento e materiais lançados",
      "Assinatura do cliente coletada"
    ]
  }
};
