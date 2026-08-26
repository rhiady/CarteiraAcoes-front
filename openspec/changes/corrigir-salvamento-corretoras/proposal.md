## Why

O formulário de corretoras envia um campo `nome` que não pertence ao contrato do backend e permite submeter o CNPJ vazio, embora o endpoint exija somente `cnpj`. Como resultado, o backend rejeita o cadastro e nenhuma corretora é salva.

## What Changes

- Alinhar o formulário, o modelo de request e o serviço de corretoras ao contrato confirmado de `POST /corretoras`.
- Exigir e validar o CNPJ antes do envio, enviando exclusivamente o campo aceito pelo backend.
- Exibir mensagens de validação ou de rejeição retornadas pela API e só retornar à listagem após persistência bem-sucedida.
- Cobrir a composição do payload e os fluxos de sucesso e erro com testes automatizados.

## Capabilities

### New Capabilities

- `broker-registration`: Cadastro de corretoras pelo frontend usando o contrato REST confirmado do backend.

### Modified Capabilities

- Nenhuma.

## Impact

- Afeta o modelo de domínio, formulário, serviço e testes de corretoras em `src/app`.
- Mantém o endpoint `POST /corretoras` e passa a enviar o request compatível `{ "cnpj": "..." }`.
- Não altera regras, contratos ou dados no backend.
