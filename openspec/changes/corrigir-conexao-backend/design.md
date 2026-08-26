## Context

Ver `proposal.md` para a motivação. Hoje todos os serviços montam URLs a partir de uma constante fixa com a origem `http://localhost:8080`. A configuração do Angular CLI não encaminha chamadas de desenvolvimento, portanto a SPA em `localhost:4200` depende de CORS estar habilitado no backend e não oferece uma separação entre endereço público e ambiente local.

## Goals / Non-Goals

**Goals:**

- Definir uma única origem lógica para a API por ambiente.
- Permitir que o desenvolvimento local use uma rota relativa da SPA e proxy para o backend local.
- Normalizar a mensagem de erros sem resposta HTTP e cobrir o comportamento com testes.

**Non-Goals:**

- Alterar endpoints, contratos, CORS ou regras de negócio no backend.
- Introduzir autenticação, retentativas automáticas ou alteração de dados offline.

## Decisions

### Usar um prefixo relativo para as chamadas de desenvolvimento

A configuração de desenvolvimento exporá a API sob um prefixo relativo, como `/api`, e o servidor Angular encaminhará esse prefixo ao backend local removendo-o antes de enviar a requisição. Isso mantém o navegador na origem da SPA e preserva os caminhos atuais do backend (`/usuarios`, `/acoes` e similares).

Alternativa considerada: manter a origem absoluta e habilitar CORS no backend. Ela mantém o acoplamento ao host local e desloca para o backend uma preocupação que o servidor de desenvolvimento resolve sem alterar o contrato da API.

### Separar a configuração por ambiente da composição de endpoints

O módulo de configuração continuará sendo a única fonte da URL base; serviços permanecem responsáveis apenas por acrescentar caminhos de recurso. A configuração de produção deverá aceitar a origem pública da API ou o mesmo prefixo relativo quando houver proxy reverso no deploy.

Alternativa considerada: URLs completas dentro de cada serviço. Ela aumenta o risco de divergência entre endpoints e impede trocar a origem de forma consistente.

### Diferenciar indisponibilidade de erros respondidos pela API

O interceptor manterá a mensagem retornada pelo backend quando houver resposta. Para erros de rede/sem resposta, ele produzirá uma mensagem específica de indisponibilidade, que as telas atuais podem apresentar pelo fluxo de erro já existente.

Alternativa considerada: exibir a mesma mensagem genérica para todos os erros. Ela não permite ao usuário distinguir uma validação de domínio de uma falha de conexão.

## Risks / Trade-offs

- [O backend local não estar na porta ou host configurados] → Documentar o destino do proxy e concentrá-lo em uma única configuração facilmente ajustável.
- [Produção sem proxy reverso para o prefixo relativo] → Definir a origem pública no arquivo de configuração de produção durante o deploy.
- [Erros de conexão serem tratados de forma diferente por navegadores] → Basear a classificação na ausência de resposta HTTP e cobrir o interceptor com testes.

## Migration Plan

1. Criar a configuração de ambiente e o proxy de desenvolvimento, apontando inicialmente para `http://localhost:8080`.
2. Atualizar a fonte de URL consumida pelos serviços e o tratamento de erros sem resposta.
3. Executar os testes e validar manualmente uma listagem contra o backend local.
4. Em caso de regressão, restaurar temporariamente a origem absoluta anterior e remover a referência ao proxy; nenhum dado ou contrato de API requer migração.
