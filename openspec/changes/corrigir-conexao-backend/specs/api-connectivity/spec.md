## Purpose

Garantir que a SPA se comunique de forma previsível com a API REST em desenvolvimento e em implantações onde frontend e backend tenham origens distintas.

## ADDED Requirements

### Requirement: Origem da API configurável
A aplicação MUST obter uma única URL base para chamadas à API a partir da configuração do ambiente em execução. Todos os serviços HTTP MUST formar suas requisições a partir dessa configuração, preservando os caminhos e os verbos dos endpoints REST existentes.

#### Scenario: Ambiente com origem própria da API
- **WHEN** a aplicação é iniciada com uma origem de API configurada
- **THEN** uma chamada de serviço é enviada para essa origem e para o caminho do endpoint solicitado

### Requirement: Comunicação local sem bloqueio de origem
No desenvolvimento local, a aplicação SHALL encaminhar requisições destinadas à API pelo servidor de desenvolvimento para o backend configurado, de modo que o navegador não bloqueie a chamada por política de mesma origem. O encaminhamento MUST preservar o caminho HTTP esperado pelo backend.

#### Scenario: Listagem durante desenvolvimento local
- **WHEN** o usuário abre uma tela que solicita dados enquanto a SPA e o backend locais estão em execução
- **THEN** a requisição chega ao endpoint correspondente do backend e os dados retornados são exibidos pela aplicação

### Requirement: Falha de conectividade compreensível
Quando não for possível estabelecer comunicação com a API, a aplicação MUST informar ao usuário que o backend está indisponível, sem apresentar uma mensagem de sucesso nem descartar os dados ainda preenchidos no fluxo atual.

#### Scenario: Backend indisponível
- **WHEN** uma requisição não recebe resposta do backend por falha de rede ou serviço indisponível
- **THEN** a interface apresenta uma mensagem de indisponibilidade da API e mantém o contexto da operação
