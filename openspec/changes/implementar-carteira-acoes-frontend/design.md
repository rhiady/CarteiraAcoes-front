## Context

O repositório contém a especificação funcional do frontend, mas ainda não possui uma mudança OpenSpec planejando sua entrega. A solução é uma SPA Angular standalone que consome um backend Spring Boot já responsável por domínio, cálculos financeiros e integrações externas. Veja `proposal.md` para a motivação e `specs/carteira-acoes-web/spec.md` para o contrato de comportamento.

## Goals / Non-Goals

**Goals:**

- Organizar a aplicação por responsabilidades: modelos e serviços em `core`, recursos em `features` e elementos reutilizáveis em `shared`.
- Manter o estado de interface local em signals e a comunicação HTTP tipada em serviços.
- Entregar fluxos progressivos: fundação, layout, cadastros, carteiras e operações.
- Tornar erros, carregamento, foco e validação acessíveis e consistentes.

**Non-Goals:**

- Reimplementar regras de negócio, cálculos de valores ou consulta de cotações no navegador.
- Adicionar login, JWT, guardas, interceptador de autenticação ou SSR.
- Alterar endpoints ou contratos de payload do backend.

## Decisions

### Camadas e contratos tipados

Os componentes delegarão chamadas a serviços injetáveis, e os serviços montarão URLs a partir de uma única configuração de ambiente. Modelos TypeScript representarão as respostas e requests, usando `number` para IDs e valores financeiros exibidos. Isso reduz acoplamento da interface aos detalhes HTTP e preserva o backend como fonte de verdade. A alternativa de chamadas HTTP diretamente nos componentes foi descartada por dispersar URLs, tratamento de erro e mapeamento de payloads.

### Rotas lazy-loaded e recursos focados

Cada recurso será organizado em rota e componentes focados de lista, formulário e detalhe quando aplicável, com lazy loading dos recursos. Isso mantém o carregamento inicial pequeno e permite que navegação e responsabilidades evoluam separadamente. Uma rota única com todos os fluxos foi descartada por tornar estado e manutenção excessivamente acoplados.

### Formulários reativos e estado de interface por signals

Os formulários usarão Reactive Forms com validações de UX; signals representarão loading, dados carregados e erros locais, e `computed()` será usado para estado derivado. Os campos de compra e venda serão mapeados explicitamente para omitir opcionais vazios. Formulários template-driven e cálculos de persistência no cliente foram descartados por enfraquecer tipagem e separar inadequadamente a responsabilidade do backend.

### Tratamento de erro em dois níveis

Um interceptor normalizará erros HTTP comuns para `ApiError`, enquanto cada tela continuará responsável por contextualizar falhas de suas ações. Isso permite exibir a mensagem do backend, inclusive a rejeição CVM, sem perder mensagens úteis específicas como falha de atualização de cotação. Um único alerta global foi descartado por não preservar o contexto da operação.

### Apresentação e acessibilidade

Pipes ou utilitários centralizarão moeda e data; componentes compartilharão estados de loading, vazio e erro. Controles terão rótulos associados, mensagens de erro anunciáveis e foco previsível após navegação ou falha de submissão. CSS será local por componente, com estilos globais apenas para tokens e base visual.

## Risks / Trade-offs

- [Contratos reais da API divergirem da especificação] → As listagens de ações e corretoras já confirmaram respostas paginadas do Spring; confirmar os demais endpoints, payloads e erros com o backend antes de cada serviço e adaptar apenas a camada de mapeamento necessária.
- [Valores `number` apresentarem arredondamento] → Exibir os valores recebidos usando formatação de moeda; não recalcular nem persistir valores financeiros no cliente.
- [Validação visual de saldo ficar desatualizada] → Usá-la somente como prevenção; sempre mostrar a resposta definitiva do backend.
- [Fluxos extensos aumentarem o bundle inicial] → Manter recursos lazy-loaded e componentes pequenos.

## Migration Plan

1. Disponibilizar a fundação, a configuração HTTP e a rota de ações como marco de integração.
2. Entregar os recursos por ordem: ações, corretoras, usuários, carteiras e operações.
3. Validar cada fluxo contra um backend disponível, incluindo erros e paginação.
4. O rollback consiste em reverter o deploy da SPA; não há migração de dados nem alteração do backend.

## Open Questions

- Os paths HTTP, payloads de escrita e formatos completos de carteira e operações ainda devem ser confirmados contra o backend. As listagens de ações e corretoras retornam páginas Spring com o array em `content`.
