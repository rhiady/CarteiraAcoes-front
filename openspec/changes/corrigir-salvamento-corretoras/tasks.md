## 1. Alinhamento ao contrato

- [x] 1.1 Atualizar o tipo de request de corretora para conter somente o CNPJ obrigatório aceito pelo endpoint de criação.
- [x] 1.2 Ajustar o formulário de corretoras para solicitar somente CNPJ, validar seu preenchimento e montar o payload compatível.
- [x] 1.3 Confirmar que o serviço envia o payload corrigido para `POST /corretoras` sem campos adicionais.

## 2. Feedback e testes

- [x] 2.1 Garantir que sucesso navegue para a listagem e que rejeição da API preserve o formulário e exiba a mensagem recebida.
- [x] 2.2 Adicionar testes unitários para validação do formulário, payload de criação e fluxos de sucesso e erro.
- [x] 2.3 Executar a suíte de testes, o build de produção e um cadastro manual contra o backend local.
