## Context

Ver `proposal.md` para a motivação. A documentação OpenAPI confirmada define `CorretoraRequest` somente com `cnpj` obrigatório. O formulário atual possui `nome` obrigatório e `cnpj` opcional, e encaminha ambos os valores ao serviço.

## Goals / Non-Goals

**Goals:**

- Manter o payload de criação idêntico ao contrato do backend.
- Impedir requisições inválidas no cliente e conservar os valores do formulário em caso de rejeição.
- Verificar o request e os caminhos de sucesso e erro automaticamente.

**Non-Goals:**

- Validar algorítmica ou externamente a situação do CNPJ; essa decisão permanece no backend.
- Alterar a listagem ou a resposta de detalhe de corretoras.

## Decisions

### Usar somente CNPJ no request de criação

O tipo de request e o formulário serão reduzidos ao CNPJ obrigatório, e o serviço continuará a enviar esse tipo diretamente ao endpoint. Isso elimina o campo `nome`, que o backend não declara no contrato.

Alternativa considerada: manter o nome na interface e removê-lo apenas no serviço. Ela permite que a tela peça uma informação que não será salva e volta a divergir do contrato.

### Validar obrigatoriedade no formulário

O controle de CNPJ receberá validação obrigatória e uma mensagem associada ao campo. A validação do formato e do registro na CVM continuará sob responsabilidade do backend, cuja mensagem será apresentada pelo interceptor e pelo formulário.

Alternativa considerada: bloquear formatos específicos no frontend. Não há uma regra de formato confirmada no contrato, portanto isso poderia rejeitar entradas aceitas pela API.

## Risks / Trade-offs

- [O contrato do backend ser ampliado futuramente] → Atualizar o modelo, a especificação e o formulário juntos antes de enviar novos campos.
- [CNPJ sintaticamente inválido chegar ao backend] → Preservar a mensagem de validação retornada para orientar o usuário sem duplicar regras não confirmadas.

## Migration Plan

1. Atualizar o modelo e formulário para o request de CNPJ obrigatório.
2. Adicionar testes de payload, sucesso e erro.
3. Executar testes e validar um cadastro contra o backend local.
4. Em caso de regressão, restaurar o formulário anterior; nenhuma migração de dados é necessária.
