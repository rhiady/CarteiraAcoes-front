import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { apiConfig } from '../config/api.config';
import { Carteira, CarteiraAcao, CarteiraRequest } from '../models/domain.models';
@Service()
export class CarteiraService {
  private readonly http = inject(HttpClient);
  list() { return this.http.get<Carteira[]>(apiConfig.endpoint('/carteiras')); }
  get(id: number) { return this.http.get<Carteira>(apiConfig.endpoint(`/carteiras/${id}`)); }
  create(request: CarteiraRequest) { return this.http.post<Carteira>(apiConfig.endpoint('/carteiras'), request); }
  positions(id: number) { return this.http.get<CarteiraAcao[]>(apiConfig.endpoint(`/carteiras/${id}/acoes`)); }
}
