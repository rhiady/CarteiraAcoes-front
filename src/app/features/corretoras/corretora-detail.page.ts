import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Corretora } from '../../core/models/domain.models';
import { CorretoraService } from '../../core/services/corretora.service';
@Component({ selector: 'app-corretora-detail', imports: [RouterLink], template: `<section>@if (item()) { <h1>{{ item()!.nome }}</h1><dl><dt>CNPJ</dt><dd>{{ item()!.cnpj ?? '—' }}</dd><dt>CVM</dt><dd>{{ item()!.codigoCvm ?? '—' }}</dd></dl> } @else { <p role="status">{{ error() || 'Carregando corretora…' }}</p> }<a routerLink="/corretoras">Voltar</a></section>` })
export class CorretoraDetailPage { private readonly service = inject(CorretoraService); private readonly route = inject(ActivatedRoute); protected readonly item = signal<Corretora | null>(null); protected readonly error = signal(''); constructor() { this.service.get(Number(this.route.snapshot.paramMap.get('id'))).subscribe({ next: (item) => this.item.set(item), error: (e: { message?: string }) => this.error.set(e.message ?? 'Não foi possível carregar a corretora.') }); } }
