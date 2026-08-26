import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({ selector: 'app-dashboard-page', imports: [RouterLink], template: `<section><h1>Dashboard</h1><p>Acompanhe e administre sua carteira de ações.</p><nav aria-label="Ações rápidas"><a routerLink="/carteiras">Ver carteiras</a><a routerLink="/acoes">Ver ações</a></nav></section>` })
export class DashboardPage {}
