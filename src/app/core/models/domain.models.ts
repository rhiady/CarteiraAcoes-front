export type Mercado = 'BRASIL' | 'EUA';
export type Moeda = 'BRL' | 'USD';
export type TipoOperacao = 'COMPRA' | 'VENDA';

export interface Usuario { id: number; nome: string; email: string; createdAt: string; updatedAt?: string; }
export interface UsuarioRequest { nome: string; email: string; senha: string; }
export interface Acao { id: number; ticker: string; nomeEmpresa: string; mercado: Mercado; moeda: Moeda; cotacaoAtual: number; dataHoraCotacao: string; createdAt?: string; updatedAt?: string; }
export interface AcaoRequest { ticker: string; mercado: Mercado; }
export interface Corretora { id: number; nome: string; cnpj?: string; codigoCvm?: string; createdAt?: string; updatedAt?: string; }
export interface CorretoraRequest { cnpj: string; }
export interface Carteira { id: number; nome: string; usuarioId: number; createdAt?: string; updatedAt?: string; }
export interface CarteiraRequest { nome: string; usuarioId: number; }
export interface CarteiraAcao { id: number; acaoId: number; ticker: string; nomeEmpresa: string; quantidade: number; cotacaoAtual: number; moeda: Moeda; valorAtual: number; }
export interface Operacao { id: number; carteiraId: number; acaoId: number; ticker: string; tipo: TipoOperacao; quantidade: number; precoUnitario: number; valorBruto: number; corretagem: number; impostos: number; valorAdicional: number; valorLiquido: number; dataHora: string; }
export interface CompraRequest { carteiraId: number; acaoId: number; quantidade: number; precoUnitario?: number; }
export interface VendaRequest { carteiraId: number; acaoId: number; quantidade: number; corretagem?: number; impostos?: number; valorAdicional?: number; }
export interface Page<T> { content: T[]; totalElements: number; totalPages: number; size: number; number: number; first: boolean; last: boolean; }
export interface ApiError { timestamp?: string; status: number; error?: string; message: string; path?: string; }
