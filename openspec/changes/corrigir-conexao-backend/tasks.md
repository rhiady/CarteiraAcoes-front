## 1. Configuração da API

- [x] 1.1 Criar configurações de URL base por ambiente, usando o prefixo relativo da API no desenvolvimento e uma origem pública configurável na produção.
- [x] 1.2 Atualizar a configuração do Angular CLI e adicionar o proxy de desenvolvimento que encaminha o prefixo da API para `http://localhost:8080` sem alterar os caminhos dos endpoints.
- [x] 1.3 Adequar o módulo central de configuração e os serviços HTTP para consumir exclusivamente a URL base configurada.

## 2. Tratamento de indisponibilidade

- [x] 2.1 Ajustar o interceptor de erros para diferenciar respostas da API de erros sem resposta e normalizar a mensagem de backend indisponível.
- [x] 2.2 Verificar nas telas que já consomem serviços que o fluxo de erro mantém os dados preenchidos e não indica sucesso após falha de conectividade.

## 3. Verificação

- [x] 3.1 Adicionar testes unitários para a composição da URL da API e para a normalização de erro sem resposta HTTP.
- [x] 3.2 Executar a suíte de testes e o build de produção.
- [x] 3.3 Executar a SPA em desenvolvimento com o backend local e confirmar que uma listagem chega ao endpoint correspondente pelo proxy.
