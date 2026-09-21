import { ToolSummary } from '../../core/models/models';

/** Dados fictícios — camada visual, sem integração real. */
export const MOCK_TOOLS: ToolSummary[] = [
  { id: '1', name: 'HTTP API', description: 'Consulta endpoints REST externos.', icon: 'lucideGlobe', status: 'Ativo', permission: 'Leitura' },
  { id: '2', name: 'Webhook', description: 'Dispara eventos para sistemas externos.', icon: 'lucideWebhook', status: 'Ativo', permission: 'Escrita' },
  { id: '3', name: 'Database Query', description: 'Consulta dados via camada de aplicação.', icon: 'lucideDatabase', status: 'Ativo', permission: 'Leitura' },
  { id: '4', name: 'Email', description: 'Envia e-mails transacionais.', icon: 'lucideMail', status: 'Inativo', permission: 'Escrita' },
  { id: '5', name: 'Calendar', description: 'Consulta e cria eventos de agenda.', icon: 'lucideCalendar', status: 'Ativo', permission: 'Leitura e escrita' },
  { id: '6', name: 'Custom Tool', description: 'Integração personalizada configurável.', icon: 'lucidePuzzle', status: 'Inativo', permission: 'Configurável' },
];
