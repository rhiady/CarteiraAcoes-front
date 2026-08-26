# Contrato de Endpoints — Carteira Ações

## Status

Este documento define o contrato de integração esperado pelo frontend. Ele foi derivado da especificação funcional, pois os controllers ou a documentação OpenAPI do backend ainda não estão disponíveis neste repositório.

> **Importante:** os caminhos, métodos HTTP e formatos abaixo são propostas de integração e devem ser conferidos com o Spring Boot antes de serem tratados como contrato definitivo. O frontend não deve implementar integrações não confirmadas como se fossem contratos reais.

## Convenções

- URL base local: `http://localhost:8080`.
- Corpo de requisições e respostas: JSON.
- IDs: números.
- Datas: strings ISO 8601 em UTC.
- Valores financeiros: números; cálculos e persistência são responsabilidade do backend.
- Erros usam, quando disponível, o formato:

```json
{
  "timestamp": "2026-08-24T12:00:00Z",
  "status": 422,
  "error": "UNPROCESSABLE_ENTITY",
  "message": "Mensagem para apresentar ao usuário.",
  "path": "/recurso"
}
```

## Usuários

| Operação | Método | Caminho proposto | Corpo |
| --- | --- | --- | --- |
| Listar usuários | `GET` | `/usuarios` | — |
| Consultar usuário | `GET` | `/usuarios/{id}` | — |
| Cadastrar usuário | `POST` | `/usuarios` | `{ "nome", "email", "senha" }` |

Resposta esperada para usuário:

```json
{
  "id": 1,
  "nome": "Ana Silva",
  "email": "ana@example.com",
  "createdAt": "2026-08-24T12:00:00Z",
  "updatedAt": "2026-08-24T12:00:00Z"
}
```

## Ações

| Operação | Método | Caminho proposto | Corpo |
| --- | --- | --- | --- |
| Listar ações | `GET` | `/acoes` | — |
| Consultar ação | `GET` | `/acoes/{id}` | — |
| Cadastrar ação | `POST` | `/acoes` | `{ "ticker", "mercado" }` |
| Atualizar cotação | `PATCH` | `/acoes/{id}/cotacao` | — |

Resposta esperada para ação:

```json
{
  "id": 1,
  "ticker": "PETR4",
  "nomeEmpresa": "Petrobras",
  "mercado": "BRASIL",
  "moeda": "BRL",
  "cotacaoAtual": 35.42,
  "dataHoraCotacao": "2026-08-24T12:00:00Z"
}
```

## Corretoras

Os campos aceitos e os caminhos abaixo precisam de confirmação do backend.

| Operação | Método | Caminho proposto | Corpo |
| --- | --- | --- | --- |
| Listar corretoras | `GET` | `/corretoras` | — |
| Consultar corretora | `GET` | `/corretoras/{id}` | — |
| Cadastrar corretora | `POST` | `/corretoras` | **A confirmar** |

Uma resposta `422` com mensagem de corretora não registrada na CVM deve ser apresentada diretamente na interface.

## Carteiras e posições

| Operação | Método | Caminho proposto | Corpo |
| --- | --- | --- | --- |
| Listar carteiras | `GET` | `/carteiras` | — |
| Consultar carteira | `GET` | `/carteiras/{id}` | — |
| Criar carteira | `POST` | `/carteiras` | `{ "nome", "usuarioId" }` |
| Consultar posições | `GET` | `/carteiras/{id}/acoes` | — |

Resposta mínima esperada para uma posição:

```json
{
  "id": 1,
  "acaoId": 1,
  "ticker": "PETR4",
  "nomeEmpresa": "Petrobras",
  "quantidade": 10,
  "cotacaoAtual": 35.42,
  "moeda": "BRL",
  "valorAtual": 354.2
}
```

## Operações

| Operação | Método | Caminho proposto | Corpo |
| --- | --- | --- | --- |
| Registrar compra | `POST` | `/operacoes/compras` | `{ "carteiraId", "acaoId", "quantidade", "precoUnitario?" }` |
| Registrar venda | `POST` | `/operacoes/vendas` | `{ "carteiraId", "acaoId", "quantidade", "corretagem?", "impostos?", "valorAdicional?" }` |
| Consultar histórico | `GET` | `/carteiras/{id}/operacoes?page=0&size=20&sort=dataHora,desc` | — |

Na compra, `precoUnitario` ausente significa que o backend deve buscar a cotação; o campo não deve ser enviado como zero. Na venda, o request não contém preço unitário.

Resposta esperada para histórico paginado:

```json
{
  "content": [],
  "totalElements": 0,
  "totalPages": 0,
  "size": 20,
  "number": 0,
  "first": true,
  "last": true
}
```

## Itens pendentes de confirmação

- Métodos e paths definitivos para atualização de cotação, operações e posições.
- Campos obrigatórios e formato da corretora.
- Se listagens de usuários, ações, corretoras e carteiras são paginadas.
- Campo de valor total e operações recentes retornados pelo detalhe da carteira.
- Códigos e estrutura de todos os erros além de `422` para CVM.
