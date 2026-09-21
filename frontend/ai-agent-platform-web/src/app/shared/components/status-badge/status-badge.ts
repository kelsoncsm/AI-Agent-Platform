import { Component, computed, input } from '@angular/core';

export type StatusBadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

const STATUS_VARIANT_MAP: Record<string, StatusBadgeVariant> = {
  ativo: 'success',
  ativa: 'success',
  sucesso: 'success',
  concluído: 'success',
  pago: 'success',
  inativo: 'neutral',
  encerrada: 'neutral',
  rascunho: 'neutral',
  executando: 'info',
  pendente: 'warning',
  processando: 'info',
  falha: 'danger',
  erro: 'danger',
  vencido: 'danger',
};

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.scss',
})
export class StatusBadge {
  readonly status = input.required<string>();
  readonly variant = input<StatusBadgeVariant>();

  protected readonly resolvedVariant = computed<StatusBadgeVariant>(
    () => this.variant() ?? STATUS_VARIANT_MAP[this.status().toLowerCase()] ?? 'neutral',
  );
}
