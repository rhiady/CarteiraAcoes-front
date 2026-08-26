import { Component, input, output } from '@angular/core';

@Component({ selector: 'app-loading-state', template: `<p role="status" aria-live="polite">{{ message() }}</p>` })
export class LoadingStateComponent { readonly message = input('Carregando…'); }

@Component({ selector: 'app-empty-state', template: `<p>{{ message() }}</p>` })
export class EmptyStateComponent { readonly message = input.required<string>(); }

@Component({ selector: 'app-error-state', template: `<div role="alert"><p class="error">{{ message() }}</p><button type="button" (click)="retry.emit()">Tentar novamente</button></div>` })
export class ErrorStateComponent { readonly message = input.required<string>(); readonly retry = output<void>(); }

@Component({ selector: 'app-pagination', template: `<nav aria-label="Paginação"><button type="button" [disabled]="first()" (click)="previous.emit()">Anterior</button><span>Página {{ page() + 1 }} de {{ totalPages() }}</span><button type="button" [disabled]="last()" (click)="next.emit()">Próxima</button></nav>` })
export class PaginationComponent { readonly page = input.required<number>(); readonly totalPages = input.required<number>(); readonly first = input.required<boolean>(); readonly last = input.required<boolean>(); readonly previous = output<void>(); readonly next = output<void>(); }
