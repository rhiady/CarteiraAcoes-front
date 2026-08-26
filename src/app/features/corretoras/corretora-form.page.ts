import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CorretoraService } from '../../core/services/corretora.service';

@Component({
  selector: 'app-corretora-form-page',
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <section>
      <h1>Cadastrar corretora</h1>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <label for="cnpj">CNPJ</label>
        <input id="cnpj" formControlName="cnpj" autocomplete="off">
        @if (form.controls.cnpj.touched && form.controls.cnpj.hasError('required')) {
          <p class="error">Informe o CNPJ.</p>
        }
        @if (error()) {
          <p class="error" role="alert">{{ error() }}</p>
        }
        <button [disabled]="form.invalid || loading()">{{ loading() ? 'Cadastrando…' : 'Cadastrar' }}</button>
        <a routerLink="/corretoras">Cancelar</a>
      </form>
    </section>
  `,
})
export class CorretoraFormPage {
  private readonly service = inject(CorretoraService);
  private readonly router = inject(Router);

  protected readonly loading = signal(false);
  protected readonly error = signal('');
  protected readonly form = new FormGroup({
    cnpj: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  protected submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.service.create(this.form.getRawValue()).subscribe({
      next: () => this.router.navigateByUrl('/corretoras'),
      error: (error: { message?: string }) => {
        this.error.set(error.message ?? 'Não foi possível cadastrar a corretora.');
        this.loading.set(false);
      },
    });
  }
}
