## Why

O projeto precisa de uma interface web para que usuários consultem e operem suas carteiras de ações por meio da API REST já provida pelo backend. A interface deve oferecer uma experiência consistente para os fluxos administrativos e de negociação sem duplicar regras financeiras ou de domínio que pertencem ao Spring Boot.

## What Changes

- Criar a SPA Angular standalone para a Carteira Ações, sem SSR e sem autenticação nesta etapa.
- Centralizar a comunicação HTTP, URL da API, modelos de domínio e tratamento global de erros.
- Disponibilizar navegação e telas para usuários, ações, corretoras, carteiras, posições e operações.
- Implementar formulários com validações preventivas, estados de carregamento, mensagens de erro, estados vazios, paginação e formatação localizada de moeda e data.
- Registrar compras, vendas e atualização de cotações delegando todos os cálculos e validações críticas ao backend.

## Capabilities

### New Capabilities

- `carteira-acoes-web`: SPA Angular para gerir cadastros, carteiras, posições e operações consumindo o backend Carteira Ações.

### Modified Capabilities

- Nenhuma.

## Impact

- Afeta a aplicação Angular em `src/app`, seus estilos globais e configuração de ambiente.
- Consome os endpoints REST de usuários, ações, corretoras, carteiras e operações do Spring Boot.
- Adiciona Angular Router, HttpClient, formulários reativos, RxJS e CSS local como elementos centrais da interface.
- Não altera contratos, regras de negócio, cálculos financeiros ou integrações externas do backend.
