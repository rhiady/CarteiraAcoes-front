import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { apiConfig } from '../config/api.config';
import { Acao, AcaoRequest, Page } from '../models/domain.models';
import { map } from 'rxjs';
@Service()
export class AcaoService {
  private readonly http = inject(HttpClient);
  list() { return this.http.get<Acao[] | Page<Acao>>(apiConfig.endpoint('/acoes')).pipe(map((response) => Array.isArray(response) ? response : response.content)); }
  get(id: number) { return this.http.get<Acao>(apiConfig.endpoint(`/acoes/${id}`)); }
  create(request: AcaoRequest) { return this.http.post<Acao>(apiConfig.endpoint('/acoes'), request); }
  updateQuote(id: number) { return this.http.patch<Acao>(apiConfig.endpoint(`/acoes/${id}/cotacao`), {}); }
}
