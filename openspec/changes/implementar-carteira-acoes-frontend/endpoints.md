{
  "openapi": "3.1.0",
  "info": {
    "title": "OpenAPI definition",
    "version": "v0"
  },
  "servers": [
    {
      "url": "http://localhost:8080",
      "description": "Generated server url"
    }
  ],
  "paths": {
    "/usuarios": {
      "get": {
        "tags": [
          "usuario-resource"
        ],
        "operationId": "listar",
        "parameters": [
          {
            "name": "pageable",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/Pageable"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/PageUsuarioResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "usuario-resource"
        ],
        "operationId": "criar",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UsuarioRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/UsuarioResponse"
                }
              }
            }
          }
        }
      }
    },
    "/operacoes/vendas": {
      "post": {
        "tags": [
          "operacao-resource"
        ],
        "operationId": "vender",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/VendaRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/OperacaoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/operacoes/compras": {
      "post": {
        "tags": [
          "operacao-resource"
        ],
        "operationId": "comprar",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CompraRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/OperacaoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/corretoras": {
      "get": {
        "tags": [
          "corretora-resource"
        ],
        "operationId": "listar_1",
        "parameters": [
          {
            "name": "pageable",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/Pageable"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/PageCorretoraResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "corretora-resource"
        ],
        "operationId": "criar_1",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CorretoraRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/CorretoraResponse"
                }
              }
            }
          }
        }
      }
    },
    "/carteiras": {
      "get": {
        "tags": [
          "carteira-resource"
        ],
        "operationId": "listar_2",
        "parameters": [
          {
            "name": "pageable",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/Pageable"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/PageCarteiraResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "carteira-resource"
        ],
        "operationId": "criar_2",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CarteiraRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/CarteiraResponse"
                }
              }
            }
          }
        }
      }
    },
    "/acoes": {
      "get": {
        "tags": [
          "acao-resource"
        ],
        "operationId": "listar_3",
        "parameters": [
          {
            "name": "pageable",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/Pageable"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/PageAcaoResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "acao-resource"
        ],
        "operationId": "criar_3",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AcaoRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/AcaoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/acoes/{id}/cotacao": {
      "post": {
        "tags": [
          "acao-resource"
        ],
        "operationId": "atualizarCotacao",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/AcaoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/usuarios/{usuarioId}/carteiras": {
      "get": {
        "tags": [
          "carteira-resource"
        ],
        "operationId": "listarPorUsuario",
        "parameters": [
          {
            "name": "usuarioId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "pageable",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/Pageable"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/PageCarteiraResponse"
                }
              }
            }
          }
        }
      }
    },
    "/usuarios/{id}": {
      "get": {
        "tags": [
          "usuario-resource"
        ],
        "operationId": "buscarPorId",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/UsuarioResponse"
                }
              }
            }
          }
        }
      }
    },
    "/operacoes/{id}": {
      "get": {
        "tags": [
          "operacao-resource"
        ],
        "operationId": "buscar",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/OperacaoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/operacoes/carteiras/{carteiraId}": {
      "get": {
        "tags": [
          "operacao-resource"
        ],
        "operationId": "historico",
        "parameters": [
          {
            "name": "carteiraId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "pageable",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/Pageable"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/PageOperacaoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/corretoras/{id}": {
      "get": {
        "tags": [
          "corretora-resource"
        ],
        "operationId": "buscarPorId_1",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/CorretoraResponse"
                }
              }
            }
          }
        }
      }
    },
    "/corretoras/cnpj/{cnpj}": {
      "get": {
        "tags": [
          "corretora-resource"
        ],
        "operationId": "buscarPorCnpj",
        "parameters": [
          {
            "name": "cnpj",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/CorretoraResponse"
                }
              }
            }
          }
        }
      }
    },
    "/carteiras/{id}": {
      "get": {
        "tags": [
          "carteira-resource"
        ],
        "operationId": "buscarPorId_2",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/CarteiraResponse"
                }
              }
            }
          }
        }
      }
    },
    "/carteiras/{id}/acoes": {
      "get": {
        "tags": [
          "carteira-resource"
        ],
        "operationId": "listarPosicoesAtivas",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "pageable",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/Pageable"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/PageCarteiraAcaoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/acoes/{id}": {
      "get": {
        "tags": [
          "acao-resource"
        ],
        "operationId": "buscarPorId_3",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/AcaoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/acoes/ticker/{ticker}": {
      "get": {
        "tags": [
          "acao-resource"
        ],
        "operationId": "buscarPorTicker",
        "parameters": [
          {
            "name": "ticker",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/AcaoResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "UsuarioRequest": {
        "type": "object",
        "properties": {
          "nome": {
            "type": "string",
            "minLength": 1
          },
          "email": {
            "type": "string",
            "format": "email",
            "minLength": 1
          },
          "senha": {
            "type": "string",
            "minLength": 1
          }
        },
        "required": [
          "email",
          "nome",
          "senha"
        ]
      },
      "UsuarioResponse": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "nome": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "updatedAt": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "VendaRequest": {
        "type": "object",
        "properties": {
          "carteiraId": {
            "type": "integer",
            "format": "int64"
          },
          "acaoId": {
            "type": "integer",
            "format": "int64"
          },
          "quantidade": {
            "type": "number",
            "minimum": 0.0001
          },
          "corretagem": {
            "type": "number",
            "minimum": 0
          },
          "impostos": {
            "type": "number",
            "minimum": 0
          },
          "valorAdicional": {
            "type": "number",
            "minimum": 0
          }
        },
        "required": [
          "acaoId",
          "carteiraId",
          "quantidade"
        ]
      },
      "OperacaoResponse": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "carteiraId": {
            "type": "integer",
            "format": "int64"
          },
          "acaoId": {
            "type": "integer",
            "format": "int64"
          },
          "tipo": {
            "type": "string",
            "enum": [
              "COMPRA",
              "VENDA"
            ]
          },
          "quantidade": {
            "type": "number"
          },
          "precoUnitario": {
            "type": "number"
          },
          "valorBruto": {
            "type": "number"
          },
          "corretagem": {
            "type": "number"
          },
          "impostos": {
            "type": "number"
          },
          "valorAdicional": {
            "type": "number"
          },
          "valorLiquido": {
            "type": "number"
          },
          "dataHora": {
            "type": "string",
            "format": "date-time"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "CompraRequest": {
        "type": "object",
        "properties": {
          "carteiraId": {
            "type": "integer",
            "format": "int64"
          },
          "acaoId": {
            "type": "integer",
            "format": "int64"
          },
          "quantidade": {
            "type": "number",
            "minimum": 0.0001
          },
          "precoUnitario": {
            "type": "number",
            "minimum": 0.0001
          },
          "corretagem": {
            "type": "number",
            "minimum": 0
          },
          "impostos": {
            "type": "number",
            "minimum": 0
          },
          "valorAdicional": {
            "type": "number",
            "minimum": 0
          }
        },
        "required": [
          "acaoId",
          "carteiraId",
          "quantidade"
        ]
      },
      "CorretoraRequest": {
        "type": "object",
        "properties": {
          "cnpj": {
            "type": "string",
            "minLength": 1
          }
        },
        "required": [
          "cnpj"
        ]
      },
      "CorretoraResponse": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "cnpj": {
            "type": "string"
          },
          "razaoSocial": {
            "type": "string"
          },
          "nomeFantasia": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "telefone": {
            "type": "string"
          },
          "cep": {
            "type": "string"
          },
          "logradouro": {
            "type": "string"
          },
          "numero": {
            "type": "string"
          },
          "complemento": {
            "type": "string"
          },
          "bairro": {
            "type": "string"
          },
          "cidade": {
            "type": "string"
          },
          "uf": {
            "type": "string"
          },
          "situacaoCadastral": {
            "type": "string"
          },
          "registroCvm": {
            "type": "string"
          },
          "dataValidacaoCvm": {
            "type": "string",
            "format": "date-time"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "updatedAt": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "CarteiraRequest": {
        "type": "object",
        "properties": {
          "nome": {
            "type": "string",
            "minLength": 1
          },
          "usuarioId": {
            "type": "integer",
            "format": "int64"
          }
        },
        "required": [
          "nome",
          "usuarioId"
        ]
      },
      "CarteiraResponse": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "nome": {
            "type": "string"
          },
          "usuarioId": {
            "type": "integer",
            "format": "int64"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "updatedAt": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "AcaoRequest": {
        "type": "object",
        "properties": {
          "ticker": {
            "type": "string",
            "minLength": 1
          },
          "mercado": {
            "type": "string",
            "enum": [
              "BRASIL",
              "EUA"
            ]
          }
        },
        "required": [
          "mercado",
          "ticker"
        ]
      },
      "AcaoResponse": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "ticker": {
            "type": "string"
          },
          "nomeEmpresa": {
            "type": "string"
          },
          "mercado": {
            "type": "string",
            "enum": [
              "BRASIL",
              "EUA"
            ]
          },
          "moeda": {
            "type": "string",
            "enum": [
              "BRL",
              "USD"
            ]
          },
          "cotacaoAtual": {
            "type": "number"
          },
          "dataHoraCotacao": {
            "type": "string",
            "format": "date-time"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "updatedAt": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "Pageable": {
        "type": "object",
        "properties": {
          "page": {
            "type": "integer",
            "format": "int32",
            "minimum": 0
          },
          "size": {
            "type": "integer",
            "format": "int32",
            "minimum": 1
          },
          "sort": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "PageUsuarioResponse": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "format": "int32"
          },
          "totalElements": {
            "type": "integer",
            "format": "int64"
          },
          "pageable": {
            "$ref": "#/components/schemas/PageableObject"
          },
          "first": {
            "type": "boolean"
          },
          "last": {
            "type": "boolean"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UsuarioResponse"
            }
          },
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "sort": {
            "$ref": "#/components/schemas/SortObject"
          },
          "numberOfElements": {
            "type": "integer",
            "format": "int32"
          },
          "empty": {
            "type": "boolean"
          }
        }
      },
      "PageableObject": {
        "type": "object",
        "properties": {
          "paged": {
            "type": "boolean"
          },
          "pageNumber": {
            "type": "integer",
            "format": "int32"
          },
          "pageSize": {
            "type": "integer",
            "format": "int32"
          },
          "unpaged": {
            "type": "boolean"
          },
          "offset": {
            "type": "integer",
            "format": "int64"
          },
          "sort": {
            "$ref": "#/components/schemas/SortObject"
          }
        }
      },
      "SortObject": {
        "type": "object",
        "properties": {
          "sorted": {
            "type": "boolean"
          },
          "unsorted": {
            "type": "boolean"
          },
          "empty": {
            "type": "boolean"
          }
        }
      },
      "PageCarteiraResponse": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "format": "int32"
          },
          "totalElements": {
            "type": "integer",
            "format": "int64"
          },
          "pageable": {
            "$ref": "#/components/schemas/PageableObject"
          },
          "first": {
            "type": "boolean"
          },
          "last": {
            "type": "boolean"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CarteiraResponse"
            }
          },
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "sort": {
            "$ref": "#/components/schemas/SortObject"
          },
          "numberOfElements": {
            "type": "integer",
            "format": "int32"
          },
          "empty": {
            "type": "boolean"
          }
        }
      },
      "PageOperacaoResponse": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "format": "int32"
          },
          "totalElements": {
            "type": "integer",
            "format": "int64"
          },
          "pageable": {
            "$ref": "#/components/schemas/PageableObject"
          },
          "first": {
            "type": "boolean"
          },
          "last": {
            "type": "boolean"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/OperacaoResponse"
            }
          },
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "sort": {
            "$ref": "#/components/schemas/SortObject"
          },
          "numberOfElements": {
            "type": "integer",
            "format": "int32"
          },
          "empty": {
            "type": "boolean"
          }
        }
      },
      "PageCorretoraResponse": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "format": "int32"
          },
          "totalElements": {
            "type": "integer",
            "format": "int64"
          },
          "pageable": {
            "$ref": "#/components/schemas/PageableObject"
          },
          "first": {
            "type": "boolean"
          },
          "last": {
            "type": "boolean"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CorretoraResponse"
            }
          },
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "sort": {
            "$ref": "#/components/schemas/SortObject"
          },
          "numberOfElements": {
            "type": "integer",
            "format": "int32"
          },
          "empty": {
            "type": "boolean"
          }
        }
      },
      "CarteiraAcaoResponse": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "carteiraId": {
            "type": "integer",
            "format": "int64"
          },
          "acaoId": {
            "type": "integer",
            "format": "int64"
          },
          "ticker": {
            "type": "string"
          },
          "quantidade": {
            "type": "number"
          },
          "version": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "PageCarteiraAcaoResponse": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "format": "int32"
          },
          "totalElements": {
            "type": "integer",
            "format": "int64"
          },
          "pageable": {
            "$ref": "#/components/schemas/PageableObject"
          },
          "first": {
            "type": "boolean"
          },
          "last": {
            "type": "boolean"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CarteiraAcaoResponse"
            }
          },
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "sort": {
            "$ref": "#/components/schemas/SortObject"
          },
          "numberOfElements": {
            "type": "integer",
            "format": "int32"
          },
          "empty": {
            "type": "boolean"
          }
        }
      },
      "PageAcaoResponse": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "format": "int32"
          },
          "totalElements": {
            "type": "integer",
            "format": "int64"
          },
          "pageable": {
            "$ref": "#/components/schemas/PageableObject"
          },
          "first": {
            "type": "boolean"
          },
          "last": {
            "type": "boolean"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AcaoResponse"
            }
          },
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "sort": {
            "$ref": "#/components/schemas/SortObject"
          },
          "numberOfElements": {
            "type": "integer",
            "format": "int32"
          },
          "empty": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
