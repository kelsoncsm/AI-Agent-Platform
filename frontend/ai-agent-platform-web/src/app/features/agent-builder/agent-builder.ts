import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { PageHeader } from '../../shared/components/page-header/page-header';

interface WizardStep {
  label: string;
}

const WIZARD_STEPS: WizardStep[] = [
  { label: 'Objetivo' },
  { label: 'Perfil' },
  { label: 'Conhecimento' },
  { label: 'Ferramentas' },
  { label: 'Permissões' },
  { label: 'Teste' },
  { label: 'Publicar' },
];

const OBJECTIVE_OPTIONS = ['Atendimento', 'Vendas', 'Suporte', 'Documentos', 'Financeiro', 'RH', 'Outro'];
const CATEGORY_OPTIONS = ['Suporte', 'Vendas', 'Finanças', 'RH', 'Análise', 'Pesquisa', 'Automação'];
const ICON_OPTIONS = ['lucideBot', 'lucideHeadphones', 'lucideFileText', 'lucideTrendingUp', 'lucideDollarSign', 'lucideUsers'];
const TONE_OPTIONS = ['Formal', 'Amigável', 'Direto', 'Consultivo'];
const AUDIENCE_OPTIONS = ['Clientes finais', 'Equipe interna', 'Parceiros'];

interface ToolToggle {
  name: string;
  enabled: boolean;
}

interface PermissionToggle {
  label: string;
  enabled: boolean;
}

@Component({
  selector: 'app-agent-builder',
  imports: [NgIcon, PageHeader, EmptyState],
  templateUrl: './agent-builder.html',
  styleUrl: './agent-builder.scss',
})
export class AgentBuilder {
  protected readonly steps = WIZARD_STEPS;
  protected readonly objectiveOptions = OBJECTIVE_OPTIONS;
  protected readonly categoryOptions = CATEGORY_OPTIONS;
  protected readonly iconOptions = ICON_OPTIONS;
  protected readonly toneOptions = TONE_OPTIONS;
  protected readonly audienceOptions = AUDIENCE_OPTIONS;

  protected readonly currentStep = signal(0);

  protected readonly name = signal('');
  protected readonly description = signal('');
  protected readonly objective = signal(OBJECTIVE_OPTIONS[0]);
  protected readonly category = signal(CATEGORY_OPTIONS[0]);
  protected readonly icon = signal(ICON_OPTIONS[0]);
  protected readonly instructions = signal('');

  protected readonly tone = signal(TONE_OPTIONS[0]);
  protected readonly audience = signal(AUDIENCE_OPTIONS[0]);

  protected readonly tools = signal<ToolToggle[]>([
    { name: 'HTTP API', enabled: false },
    { name: 'Webhook', enabled: false },
    { name: 'Database Query', enabled: false },
    { name: 'Email', enabled: false },
    { name: 'Calendar', enabled: false },
  ]);

  protected readonly permissions = signal<PermissionToggle[]>([
    { label: 'Consultar dados', enabled: true },
    { label: 'Criar dados', enabled: false },
    { label: 'Alterar dados', enabled: false },
    { label: 'Excluir dados', enabled: false },
    { label: 'Enviar mensagens', enabled: false },
  ]);

  protected readonly enabledToolsCount = computed(() => this.tools().filter((t) => t.enabled).length);
  protected readonly enabledPermissionsCount = computed(() => this.permissions().filter((p) => p.enabled).length);

  constructor(private readonly router: Router) {}

  protected goNext(): void {
    this.currentStep.update((step) => Math.min(step + 1, this.steps.length - 1));
  }

  protected goBack(): void {
    this.currentStep.update((step) => Math.max(step - 1, 0));
  }

  protected goToStep(index: number): void {
    this.currentStep.set(index);
  }

  protected cancel(): void {
    this.router.navigate(['/agents']);
  }

  protected publish(): void {
    this.router.navigate(['/agents']);
  }

  protected toggleTool(tool: ToolToggle): void {
    this.tools.update((list) => list.map((t) => (t === tool ? { ...t, enabled: !t.enabled } : t)));
  }

  protected togglePermission(permission: PermissionToggle): void {
    this.permissions.update((list) => list.map((p) => (p === permission ? { ...p, enabled: !p.enabled } : p)));
  }
}
