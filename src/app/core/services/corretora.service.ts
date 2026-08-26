import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { apiConfig } from '../config/api.config';
import { Corretora, CorretoraRequest, Page } from '../models/domain.models';
import { map } from 'rxjs';
@Service()
export class CorretoraService {
  private readonly http = inject(HttpClient);
  list() { return this.http.get<Corretora[] | Page<Corretora>>(apiConfig.endpoint('/corretoras')).pipe(map((value) => Array.isArray(value) ? value : value.content)); }
  get(id: number) { return this.http.get<Corretora>(apiConfig.endpoint(`/corretoras/${id}`)); }
  create(request: CorretoraRequest) { return this.http.post<Corretora>(apiConfig.endpoint('/corretoras'), request); }
}
