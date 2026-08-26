import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { apiConfig } from '../config/api.config';
import { Usuario, UsuarioRequest } from '../models/domain.models';
@Service()
export class UsuarioService {
  private readonly http = inject(HttpClient);
  list() { return this.http.get<Usuario[]>(apiConfig.endpoint('/usuarios')); }
  create(request: UsuarioRequest) { return this.http.post<Usuario>(apiConfig.endpoint('/usuarios'), request); }
}
