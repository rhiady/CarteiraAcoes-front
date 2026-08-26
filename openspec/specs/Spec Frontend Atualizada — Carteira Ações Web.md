# 1. Objetivo

Desenvolver o frontend web do sistema **Carteira Ações**, responsável por consumir a API REST do backend e permitir ao usuário acompanhar sua carteira de ações.

O frontend deverá permitir:

- cadastrar usuários;
- visualizar usuários;
- criar carteiras;
- visualizar carteiras;
- cadastrar ações;
- consultar ações;
- atualizar cotações;
- cadastrar corretoras;
- consultar corretoras;
- registrar compras;
- registrar vendas;
- consultar posições atuais;
- consultar histórico de operações.

O frontend será uma camada de apresentação e interação.

As regras críticas de negócio permanecerão no backend.

---

# 2. Stack

- Angular
- TypeScript
- Angular Router
- HttpClient
- Reactive Forms
- RxJS
- CSS

O projeto será:

```text
SPA
Standalone
Sem SSR
CSS normal
```

Não será utilizado SSR nesta versão.

---

# 3. Estrutura

```text
src/app
│
├── core
│   ├── models
│   ├── services
│   ├── interceptors
│   └── config
│
├── features
│   ├── usuarios
│   ├── carteiras
│   ├── acoes
│   ├── corretoras
│   └── operacoes
│
├── shared
│   ├── components
│   ├── pipes
│   └── utils
│
├── app.component.ts
├── app.component.html
├── app.component.css
├── app.config.ts
└── app.routes.ts
```

---

# 4. Arquitetura do Frontend

Fluxo principal:

```text
Component
   ↓
Service
   ↓
HttpClient
   ↓
Backend REST
```

Components não deverão montar URLs diretamente.

Toda comunicação HTTP deverá passar pelos Services.

---

# 5. Configuração da API

A URL do backend deverá ser centralizada.

Exemplo:

```typescript
export const environment = {
  apiUrl: 'http://localhost:8080'
};
```

Services utilizarão:

```typescript
`${environment.apiUrl}/acoes`
```

Não deverão existir URLs hardcoded espalhadas pelos Components.

---

# 6. HttpClient

Como o projeto utilizará standalone Angular, o `HttpClient` deverá ser disponibilizado em `app.config.ts`.

```typescript
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};
```

---

# 7. Models

Criar:

```text
core/models
│
├── usuario.model.ts
├── carteira.model.ts
├── carteira-acao.model.ts
├── acao.model.ts
├── corretora.model.ts
├── operacao.model.ts
├── compra-request.model.ts
├── venda-request.model.ts
├── page.model.ts
└── api-error.model.ts
```

---

# 8. IDs

IDs retornados pelo backend serão representados no Angular como:

```typescript
number
```

Exemplo:

```typescript
export interface Usuario {
  id: number;
}
```

Isso corresponde aos `Long` utilizados pelo backend.

---

# 9. Valores Financeiros

Valores financeiros serão representados no frontend como:

```typescript
number
```

Exemplo:

```typescript
cotacaoAtual: number;
precoUnitario: number;
valorBruto: number;
valorLiquido: number;
```

O backend continuará sendo a fonte da verdade para os cálculos financeiros utilizando `BigDecimal`.

O frontend não deverá recalcular valores com finalidade de persistência.

---

# 10. Usuario Model

```typescript
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  createdAt: string;
  updatedAt?: string;
}
```

Request:

```typescript
export interface UsuarioRequest {
  nome: string;
  email: string;
  senha: string;
}
```

A senha nunca deverá aparecer no response.

---

# 11. Acao Model

```typescript
export type Mercado =
  | 'BRASIL'
  | 'EUA';

export type Moeda =
  | 'BRL'
  | 'USD';

export interface Acao {
  id: number;
  ticker: string;
  nomeEmpresa: string;
  mercado: Mercado;
  moeda: Moeda;
  cotacaoAtual: number;
  dataHoraCotacao: string;
  createdAt?: string;
  updatedAt?: string;
}
```

---

# 12. Carteira Model

```typescript
export interface Carteira {
  id: number;
  nome: string;
  usuarioId: number;
  createdAt?: string;
  updatedAt?: string;
}
```

---

# 13. CarteiraAcao Model

```typescript
export interface CarteiraAcao {
  id: number;
  acaoId: number;
  ticker: string;
  nomeEmpresa: string;
  quantidade: number;
  cotacaoAtual: number;
  moeda: Moeda;
  valorAtual: number;
}
```

---

# 14. Operacao Model

```typescript
export type TipoOperacao =
  | 'COMPRA'
  | 'VENDA';

export interface Operacao {
  id: number;

  carteiraId: number;
  acaoId: number;
  ticker: string;

  tipo: TipoOperacao;

  quantidade: number;
  precoUnitario: number;

  valorBruto: number;
  corretagem: number;
  impostos: number;
  valorAdicional: number;
  valorLiquido: number;

  dataHora: string;
}
```

---

# 15. CompraRequest

```typescript
export interface CompraRequest {
  carteiraId: number;
  acaoId: number;
  quantidade: number;
  precoUnitario?: number;
}
```

Regra:

```text
precoUnitario informado
→ backend usa valor informado

precoUnitario ausente
→ backend busca cotação
```

O frontend nunca deverá consultar Brapi ou Alpha Vantage diretamente.

---

# 16. VendaRequest

```typescript
export interface VendaRequest {
  carteiraId: number;
  acaoId: number;
  quantidade: number;
  corretagem?: number;
  impostos?: number;
  valorAdicional?: number;
}
```

O request não terá:

```text
precoUnitario
```

O backend buscará o preço da venda.

---

# 17. Page Model

```typescript
export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}
```

---

# 18. ApiError

```typescript
export interface ApiError {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path?: string;
}
```

O frontend deverá priorizar:

```text
message
```

para comunicação com o usuário.

---

# 19. Services

```text
core/services
│
├── usuario.service.ts
├── carteira.service.ts
├── acao.service.ts
├── corretora.service.ts
└── operacao.service.ts
```

---

# 20. Validações no Frontend

O Angular será responsável principalmente por validações de formulário e experiência do usuário.

Exemplos:

```text
campo obrigatório
e-mail válido
número positivo
campo opcional com valor válido
botão desabilitado quando formulário inválido
mensagem visual de erro
```

Essas validações não substituirão as regras do backend.

---

# 21. Princípio de Validação

Regra oficial:

> Validações do Angular possuem finalidade preventiva e de UX. Toda regra crítica de negócio deverá ser validada novamente pelo backend, que permanece como fonte da verdade.

---

# 22. O que o Angular deverá validar

## Usuário

```text
nome
→ obrigatório

email
→ obrigatório
→ formato válido

senha
→ obrigatória
```

Exemplo:

```typescript
this.form = this.fb.group({
  nome: ['', Validators.required],
  email: ['', [
    Validators.required,
    Validators.email
  ]],
  senha: ['', Validators.required]
});
```

---

# 23. Validação de Ação

```text
ticker
→ obrigatório

mercado
→ obrigatório
```

O Angular não deverá validar externamente se o ticker existe.

Essa responsabilidade é do backend.

---

# 24. Validação de Compra

```text
ação
→ obrigatória

quantidade
→ obrigatória
→ maior que zero

precoUnitario
→ opcional
→ se informado, maior que zero
```

O preço poderá ficar vazio.

Caso fique vazio, o backend buscará a cotação.

---

# 25. Validação de Venda

```text
ação
→ obrigatória

quantidade
→ obrigatória
→ maior que zero

corretagem
→ opcional
→ >= 0

impostos
→ opcional
→ >= 0

valorAdicional
→ opcional
→ >= 0
```

O frontend poderá usar a quantidade disponível para impedir visualmente que o usuário solicite uma venda maior que sua posição.

Porém o backend deverá validar novamente.

---

# 26. Regras que NÃO ficam no Angular

O Angular não será responsável por:

```text
validar existência real do usuário

validar duplicidade de email

validar CVM

validar CNPJ em API externa

validar CEP em API externa

validar ticker em API externa

validar se ação realmente existe na carteira

validar saldo real de ações

validar concorrência

determinar preço oficial da venda

calcular valor bruto definitivo

calcular valor líquido definitivo

persistir posição
```

Essas regras pertencem ao backend.

---

# 27. Rotas

```text
/usuarios
/usuarios/novo

/carteiras
/carteiras/nova
/carteiras/:id

/acoes
/acoes/nova
/acoes/:id

/corretoras
/corretoras/nova
/corretoras/:id

/carteiras/:id/operacoes
/carteiras/:id/comprar
/carteiras/:id/vender
```

---

# 28. Layout

Estrutura:

```text
┌──────────────────────────────────┐
│ Navbar                           │
├───────────┬──────────────────────┤
│ Menu      │                      │
│ lateral   │      Conteúdo        │
│           │                      │
└───────────┴──────────────────────┘
```

Menu:

```text
Dashboard
Carteiras
Ações
Corretoras
Usuários
```

---

# 29. Usuários

Telas:

```text
usuario-list
usuario-form
```

Listagem:

```text
Nome
E-mail
Data cadastro
```

---

# 30. Ações

Telas:

```text
acao-list
acao-form
acao-detail
```

Tabela:

```text
Ticker
Empresa
Mercado
Moeda
Cotação Atual
Última Atualização
Ações
```

Ações disponíveis:

```text
Detalhes
Atualizar cotação
```

---

# 31. Cadastro de Ação

Campos:

```text
Ticker
Mercado
```

O frontend não deverá solicitar:

```text
nomeEmpresa
moeda
cotacaoAtual
```

Esses valores serão determinados pelo backend.

---

# 32. Corretoras

Telas:

```text
corretora-list
corretora-form
corretora-detail
```

O frontend deverá pedir somente os campos necessários ao request real do backend.

A validação da CVM ocorrerá exclusivamente no Spring Boot.

---

# 33. Erro de CVM

Caso o backend responda:

```text
422
CORRETORA_NAO_REGISTRADA_CVM
```

o frontend deverá apresentar a mensagem retornada.

Exemplo:

```text
A instituição informada não possui registro válido na CVM.
```

---

# 34. Carteiras

Telas:

```text
carteira-list
carteira-form
carteira-detail
```

Cadastro:

```text
Nome
Usuário
```

---

# 35. Detalhes da Carteira

A tela deverá apresentar:

```text
nome da carteira
usuário
valor atual
posições
operações recentes
ações de compra/venda
```

---

# 36. Tabela de Posições

Colunas:

```text
Ticker
Empresa
Quantidade
Cotação Atual
Moeda
Valor Atual
Ações
```

Ações:

```text
Comprar
Vender
```

---

# 37. Compra

Campos:

```text
Ação
Quantidade
Preço unitário opcional
```

Mensagem auxiliar:

```text
Se não informado, será utilizada a cotação obtida pelo sistema.
```

Se o preço não for informado:

```typescript
precoUnitario: undefined
```

Não enviar:

```typescript
precoUnitario: 0
```

---

# 38. Falha na Compra

Compra com preço informado:

```text
pode prosseguir sem depender da API para definir preço
```

Compra sem preço:

```text
API obrigatória
```

Caso o backend rejeite por indisponibilidade:

```text
manter formulário
mostrar erro
não assumir sucesso
```

---

# 39. Venda

Campos:

```text
Ação
Quantidade
Corretagem
Impostos
Valor adicional
```

Não deverá existir campo:

```text
Preço unitário
```

na venda.

---

# 40. Validação Visual da Venda

Se a posição possuir:

```text
quantidade = 10
```

o formulário poderá impedir visualmente:

```text
quantidade > 10
```

Mas o backend continuará sendo responsável pela validação definitiva.

---

# 41. Histórico

Tabela:

```text
Data
Tipo
Ticker
Quantidade
Preço Unitário
Valor Bruto
Corretagem
Impostos
Valor Adicional
Valor Líquido
```

---

# 42. Ordenação do Histórico

Padrão:

```text
dataHora DESC
```

Mais recente primeiro.

---

# 43. Paginação

Exemplo:

```text
page=0
size=20
sort=dataHora,desc
```

A interface deverá permitir avançar e voltar páginas.

---

# 44. Formatação de Moeda

O Angular deverá utilizar a moeda retornada pelo backend.

```text
BRL
→ R$

USD
→ US$
```

O valor persistido não deverá ser alterado pelo frontend.

---

# 45. Formatação de Datas

O backend trabalhará em UTC.

O Angular será responsável pela apresentação em horário local quando necessário.

---

# 46. Loading

Requisições deverão controlar estado de loading.

Exemplo:

```typescript
loading = false;
```

Durante submit:

```text
loading = true
desabilitar botão
```

Após resposta:

```text
loading = false
```

---

# 47. Submit Duplicado

Durante uma operação:

```text
Comprar
Vender
Cadastrar
Atualizar
```

o botão deverá ficar desabilitado enquanto a requisição estiver em andamento.

Objetivo:

```text
evitar múltiplos POSTs acidentais
```

---

# 48. Estado de Erro

Listagens e formulários deverão apresentar mensagens claras.

Exemplos:

```text
Não foi possível carregar as ações.

Não foi possível registrar a compra.

Não foi possível atualizar a cotação.
```

---

# 49. Estado Vazio

Exemplos:

```text
Nenhuma ação cadastrada.

Nenhuma corretora cadastrada.

Nenhuma operação registrada.

Esta carteira ainda não possui ações.
```

---

# 50. Error Interceptor

Poderá ser implementado:

```text
core/interceptors/error.interceptor.ts
```

Responsável por erros globais comuns.

Entretanto, páginas ainda poderão tratar erros específicos.

---

# 51. Security

Não haverá nesta etapa:

```text
JWT
login
AuthGuard
AuthInterceptor
Bearer Token
Role
```

Nenhum código de autenticação deverá ser criado apenas como preparação.

---

# 52. CSS

O projeto utilizará:

```text
CSS normal
```

Arquivos:

```text
.component.css
```

Não há necessidade de migrar para SCSS nesta versão.

Componentes deverão manter estilos locais sempre que possível.

Estilos globais deverão ficar em:

```text
src/styles.css
```

---

# 53. SSR

O frontend será uma:

```text
SPA
```

Não utilizará:

```text
SSR
SSG
```

O Angular será executado no navegador e consumirá o Spring Boot através de HTTP/JSON.

---

# 54. Ordem de Desenvolvimento

## Etapa 1

```text
estrutura
rotas
HttpClient
configuração da API
models
services
```

## Etapa 2

```text
layout
navbar
menu
componentes compartilhados
```

## Etapa 3

```text
Ações
```

Fluxo:

```text
listar
cadastrar
atualizar cotação
```

## Etapa 4

```text
Corretoras
```

## Etapa 5

```text
Usuários
```

## Etapa 6

```text
Carteiras
```

## Etapa 7

```text
Compra
Venda
Histórico
```

## Etapa 8

```text
Dashboard
```

---

# 55. Primeiro Marco Técnico

O primeiro marco deverá ser:

```text
Angular
 ↓
AcaoService
 ↓
GET /acoes
 ↓
Spring Boot
 ↓
Response
 ↓
Tabela
```

Esse teste validará:

```text
CORS
HttpClient
URL backend
Service
Models
Backend
```

---

# 56. Critérios de Aceite

O frontend deverá:

- funcionar como SPA;
- utilizar CSS;
- funcionar sem SSR;
- utilizar standalone Angular;
- utilizar Reactive Forms;
- centralizar chamadas HTTP em Services;
- possuir validações básicas de formulário;
- manter regras críticas no backend;
- cadastrar usuário;
- cadastrar ação;
- cadastrar corretora;
- criar carteira;
- registrar compra;
- registrar venda;
- mostrar posições;
- mostrar histórico;
- mostrar loading;
- impedir submits duplicados;
- apresentar erros do backend;
- utilizar paginação;
- apresentar valores conforme moeda;
- apresentar datas corretamente;
- funcionar sem autenticação.

---

# 57. Princípio Final

A divisão oficial será:

```text
Angular
→ apresentação
→ formulários
→ UX
→ validações preventivas
```

```text
Spring Boot
→ regras de negócio
→ validações críticas
→ cálculos
→ integrações externas
→ persistência
```

O backend permanecerá sempre como fonte da verdade.