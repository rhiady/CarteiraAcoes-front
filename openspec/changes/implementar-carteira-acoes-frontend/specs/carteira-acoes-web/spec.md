## Purpose

Disponibilizar uma SPA para administrar a Carteira Ações e acompanhar suas posições, consumindo exclusivamente a API REST do backend como fonte de verdade.

## ADDED Requirements

### Requirement: Navegação da aplicação
A aplicação SHALL ser uma SPA navegável para dashboard, usuários, ações, corretoras e carteiras, incluindo as rotas de detalhe, compra, venda e histórico de cada carteira aplicável. A aplicação MUST funcionar sem SSR e sem exigir autenticação nesta etapa.

#### Scenario: Navegação para uma carteira
- **WHEN** o usuário seleciona uma carteira na listagem
- **THEN** a aplicação apresenta os detalhes da carteira na rota identificada pelo seu ID

### Requirement: Comunicação com o backend
A aplicação MUST centralizar a URL base da API e toda chamada HTTP em serviços. Componentes MUST NOT construir URLs nem consultar provedores de cotação externos diretamente. Erros retornados pela API MUST apresentar ao usuário a mensagem fornecida pelo backend quando disponível.

#### Scenario: Erro de domínio retornado pela API
- **WHEN** uma requisição recebe uma resposta de erro com o campo `message`
- **THEN** a interface mantém o contexto da operação e apresenta essa mensagem ao usuário

### Requirement: Gestão de cadastros
A aplicação SHALL permitir listar e cadastrar usuários, listar, cadastrar, detalhar e atualizar a cotação de ações, e listar, cadastrar e detalhar corretoras. Os formulários MUST solicitar somente os campos aceitos pelos respectivos requests do backend.

#### Scenario: Cadastro de ação
- **WHEN** o usuário informa ticker e mercado válidos e confirma o formulário
- **THEN** a aplicação solicita ao backend o cadastro da ação sem enviar nome da empresa, moeda ou cotação atual

#### Scenario: Corretora não registrada na CVM
- **WHEN** o backend rejeita o cadastro de uma corretora com status 422
- **THEN** a interface apresenta a mensagem devolvida pelo backend

### Requirement: Gestão de carteiras e posições
A aplicação SHALL permitir listar e criar carteiras associadas a usuários e visualizar os dados, posições e ações disponíveis de uma carteira. Cada posição MUST apresentar ticker, empresa, quantidade, cotação atual, moeda e valor atual.

#### Scenario: Carteira sem posições
- **WHEN** a carteira não possui posições
- **THEN** a interface apresenta um estado vazio informando que a carteira ainda não possui ações

### Requirement: Registro de compra
A aplicação SHALL permitir registrar uma compra com ação, quantidade e preço unitário opcional. Quando o preço não for informado, a aplicação MUST omitir o campo do request; ela MUST NOT enviá-lo com valor zero.

#### Scenario: Compra sem preço unitário
- **WHEN** o usuário registra uma compra sem preencher o preço unitário
- **THEN** a aplicação envia a ação e a quantidade sem o campo de preço unitário

#### Scenario: Falha de cotação em compra sem preço
- **WHEN** o backend rejeita uma compra sem preço por indisponibilidade de cotação
- **THEN** a aplicação preserva os dados preenchidos e apresenta o erro sem indicar sucesso

### Requirement: Registro de venda
A aplicação SHALL permitir registrar uma venda com ação, quantidade e valores opcionais de corretagem, impostos e valor adicional. O formulário de venda MUST NOT exibir nem enviar preço unitário e MUST impedir visualmente, quando a posição for conhecida, quantidade superior à disponível.

#### Scenario: Venda acima da posição visível
- **WHEN** o usuário informa uma quantidade superior à posição exibida
- **THEN** a interface impede o envio e informa que a quantidade excede a posição disponível

### Requirement: Histórico paginado e apresentação de valores
A aplicação SHALL apresentar o histórico de operações de uma carteira em ordem decrescente de data e com paginação navegável. Valores MUST ser formatados conforme a moeda devolvida pela API e datas UTC MUST ser apresentadas no horário local do usuário.

#### Scenario: Histórico com mais de uma página
- **WHEN** o backend informa que há páginas adicionais de operações
- **THEN** a interface permite avançar e voltar entre as páginas mantendo a ordenação por data decrescente

### Requirement: Experiência e validação de formulários
A aplicação MUST validar preventivamente campos obrigatórios, e-mail, números positivos e valores opcionais não negativos. Durante qualquer requisição de submissão, a ação que iniciou a requisição MUST indicar carregamento e permanecer desabilitada até sua conclusão. Listagens MUST comunicar estados de carregamento, erro e vazio.

#### Scenario: Submissão inválida
- **WHEN** um formulário contém campos obrigatórios ausentes ou um valor numérico inválido
- **THEN** a aplicação impede a submissão e apresenta mensagens de validação associadas aos campos

#### Scenario: Submissão em andamento
- **WHEN** o usuário envia um formulário válido
- **THEN** o botão de submissão fica desabilitado enquanto a resposta não é recebida
