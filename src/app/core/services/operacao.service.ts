import { HttpClient, HttpParams } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { apiConfig } from '../config/api.config';
import { CompraRequest, Operacao, Page, VendaRequest } from '../models/domain.models';
@Service()
export class OperacaoService {
  private readonly http = inject(HttpClient);
  buy(request: CompraRequest) { return this.http.post<Operacao>(apiConfig.endpoint('/operacoes/compras'), request); }
  sell(request: VendaRequest) { return this.http.post<Operacao>(apiConfig.endpoint('/operacoes/vendas'), request); }
  history(carteiraId: number, page = 0) { return this.http.get<Page<Operacao>>(apiConfig.endpoint(`/carteiras/${carteiraId}/operacoes`), { params: new HttpParams().set('page', page).set('size', 20).set('sort', 'dataHora,desc') }); }
}
