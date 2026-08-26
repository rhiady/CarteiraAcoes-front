## 1. Fundação da aplicação

- [x] 1.1 Inspecionar e documentar os contratos reais dos endpoints do backend para usuários, ações, corretoras, carteiras e operações antes de conectá-los à interface.
- [x] 1.2 Configurar a URL centralizada da API e `HttpClient` na aplicação standalone.
- [x] 1.3 Criar os modelos TypeScript de usuário, ação, corretora, carteira, posição, operação, requests, página e erro de API.
- [x] 1.4 Criar serviços HTTP tipados que encapsulem os endpoints confirmados, sem URLs em componentes.
- [x] 1.5 Implementar o interceptor de erros e a conversão de mensagens de API para tratamento contextual nas telas.
- [x] 1.6 Configurar rotas lazy-loaded para dashboard, usuários, ações, corretoras e carteiras, incluindo detalhes e operações.

## 2. Base visual e experiência compartilhada

- [x] 2.1 Implementar o shell responsivo com navbar, menu lateral e área de conteúdo.
- [x] 2.2 Criar componentes reutilizáveis e acessíveis para carregamento, estado vazio, erro e paginação.
- [x] 2.3 Criar formatação reutilizável de moeda conforme BRL/USD e de datas UTC no horário local.
- [x] 2.4 Definir estilos globais mínimos e CSS local por componente, garantindo contraste, foco visível e navegação por teclado.

## 3. Recurso de ações

- [x] 3.1 Implementar a listagem de ações com loading, erro, estado vazio e acesso aos detalhes.
- [x] 3.2 Implementar o formulário de cadastro de ação com ticker e mercado obrigatórios e payload restrito ao request do backend.
- [x] 3.3 Implementar a tela de detalhes da ação e a ação de atualizar cotação, impedindo submit duplicado.
- [x] 3.4 Validar o marco de integração `GET /acoes` contra o backend e tratar a indisponibilidade da API.

## 4. Recursos de usuários e corretoras

- [x] 4.1 Implementar listagem e formulário de cadastro de usuários com validação de nome, e-mail e senha.
- [x] 4.2 Implementar listagem, formulário e detalhes de corretoras usando somente os campos aceitos pelo backend.
- [x] 4.3 Exibir na tela de corretoras a mensagem retornada pelo backend para rejeições de CVM, inclusive status 422.

## 5. Recurso de carteiras e posições

- [x] 5.1 Implementar listagem e criação de carteiras associadas a um usuário.
- [x] 5.2 Implementar detalhes da carteira com identificação, usuário, valor atual, posições, operações recentes e ações de compra/venda.
- [x] 5.3 Implementar a tabela de posições com valores formatados e o estado vazio para carteiras sem ações.

## 6. Operações e histórico

- [x] 6.1 Implementar o formulário de compra com validação, preço unitário opcional e omissão do campo quando estiver vazio.
- [x] 6.2 Preservar os dados do formulário de compra e apresentar o erro do backend quando a cotação não estiver disponível.
- [x] 6.3 Implementar o formulário de venda sem preço unitário, validando quantidade e valores opcionais não negativos.
- [x] 6.4 Impedir visualmente vendas acima da posição carregada, sem substituir a validação definitiva do backend.
- [x] 6.5 Implementar histórico de operações com colunas financeiras, ordenação por data decrescente e paginação navegável.

## 7. Qualidade e validação

- [ ] 7.1 Adicionar testes para serviços, mapeamento de payloads opcionais, interceptor e formatação de dados.
- [ ] 7.2 Adicionar testes de componentes para estados de loading, erro, vazio, validação, foco e prevenção de submit duplicado.
- [x] 7.3 Executar lint, testes e build de produção, corrigindo falhas encontradas.
- [ ] 7.4 Validar manualmente os critérios de aceite contra um backend disponível, incluindo cadastros, posições, operações, paginação e mensagens de erro.
