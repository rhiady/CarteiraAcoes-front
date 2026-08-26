## Why

O frontend configura a API com uma origem fixa (`http://localhost:8080`) e não possui uma estratégia de proxy nem configuração por ambiente. Isso impede a comunicação confiável quando a SPA e o backend usam origens diferentes ou quando a aplicação é executada fora do ambiente local esperado.

## What Changes

- Tornar o endereço da API configurável por ambiente, sem URLs de backend distribuídas pelos serviços.
- Configurar o ambiente de desenvolvimento para encaminhar chamadas da SPA ao backend, evitando bloqueios de mesma origem/CORS no navegador.
- Preservar os caminhos e verbos HTTP já usados pelos serviços e apresentar uma mensagem clara quando o backend estiver indisponível.
- Cobrir a resolução da URL e o tratamento de falha de conexão com testes automatizados.

## Capabilities

### New Capabilities

- `api-connectivity`: Configuração e comportamento de comunicação da SPA com a API REST do backend.

### Modified Capabilities

- Nenhuma.

## Impact

- Afeta `src/app/core/config`, os serviços HTTP, o interceptor de erros, a configuração do Angular CLI e os testes relacionados.
- Consome os mesmos endpoints REST existentes do backend, sem mudar seus contratos ou regras de negócio.
- Requer que o backend permaneça acessível na origem configurada; para desenvolvimento local, a suposição inicial é `http://localhost:8080`.
