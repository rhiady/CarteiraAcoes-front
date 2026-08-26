import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage) },
  { path: 'acoes', loadComponent: () => import('./features/acoes/acoes.page').then((m) => m.AcoesPage) },
  { path: 'acoes/novo', loadComponent: () => import('./features/acoes/acao-form.page').then((m) => m.AcaoFormPage) },
  { path: 'acoes/:id', loadComponent: () => import('./features/acoes/acao-detail.page').then((m) => m.AcaoDetailPage) },
  { path: 'usuarios', loadComponent: () => import('./features/usuarios/usuarios.page').then((m) => m.UsuariosPage) },
  { path: 'usuarios/novo', loadComponent: () => import('./features/usuarios/usuario-form.page').then((m) => m.UsuarioFormPage) },
  { path: 'corretoras', loadComponent: () => import('./features/corretoras/corretoras.page').then((m) => m.CorretorasPage) },
  { path: 'corretoras/nova', loadComponent: () => import('./features/corretoras/corretora-form.page').then((m) => m.CorretoraFormPage) },
  { path: 'corretoras/:id', loadComponent: () => import('./features/corretoras/corretora-detail.page').then((m) => m.CorretoraDetailPage) },
  { path: 'carteiras', loadComponent: () => import('./features/carteiras/carteiras.page').then((m) => m.CarteirasPage) },
  { path: 'carteiras/nova', loadComponent: () => import('./features/carteiras/carteira-form.page').then((m) => m.CarteiraFormPage) },
  { path: 'carteiras/:id', loadComponent: () => import('./features/carteiras/carteira-detail.page').then((m) => m.CarteiraDetailPage) },
  { path: 'carteiras/:id/comprar', loadComponent: () => import('./features/operacoes/compra.page').then((m) => m.CompraPage) },
  { path: 'carteiras/:id/vender', loadComponent: () => import('./features/operacoes/venda.page').then((m) => m.VendaPage) },
  { path: 'carteiras/:id/operacoes', loadComponent: () => import('./features/operacoes/historico.page').then((m) => m.HistoricoPage) },
  { path: '**', redirectTo: 'dashboard' },
];
