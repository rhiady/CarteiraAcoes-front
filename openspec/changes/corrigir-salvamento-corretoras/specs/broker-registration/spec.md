## Purpose

Permitir que usuários cadastrem corretoras pela SPA com um payload compatível com o endpoint REST e recebam retorno claro sobre o resultado da persistência.

## ADDED Requirements

### Requirement: Envio compatível do cadastro de corretora
A aplicação MUST enviar o cadastro de corretora para `POST /corretoras` contendo exclusivamente o campo obrigatório `cnpj`, com um valor não vazio. A aplicação MUST NOT enviar campos de apresentação ou campos não aceitos pelo contrato desse endpoint.

#### Scenario: Cadastro com CNPJ informado
- **WHEN** o usuário informa um CNPJ válido e confirma o formulário
- **THEN** a aplicação envia um request contendo apenas o CNPJ para o backend

### Requirement: Feedback do resultado do cadastro
A aplicação SHALL navegar de volta à listagem de corretoras somente após o backend confirmar o cadastro. Quando o backend rejeitar o request, a aplicação MUST manter o usuário no formulário e apresentar a mensagem retornada pela API quando disponível.

#### Scenario: Corretora salva com sucesso
- **WHEN** o backend confirma o cadastro da corretora
- **THEN** a aplicação retorna para a listagem de corretoras

#### Scenario: Corretora rejeitada pelo backend
- **WHEN** o backend responde com erro ao cadastrar uma corretora
- **THEN** a aplicação mantém os valores informados e apresenta a mensagem de erro retornada

### Requirement: Validação do CNPJ obrigatório
A aplicação MUST impedir o envio do formulário enquanto o CNPJ estiver vazio e comunicar ao usuário que o campo é obrigatório.

#### Scenario: Tentativa sem CNPJ
- **WHEN** o usuário tenta enviar o formulário sem preencher o CNPJ
- **THEN** a aplicação não envia uma requisição e apresenta uma mensagem de validação associada ao campo
