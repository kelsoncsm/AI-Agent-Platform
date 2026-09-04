import { ExecutionRecord } from '../../core/models/models';

/** Dados fictícios — camada visual, sem integração real. */

export const DASHBOARD_STATS = [
  { label: 'Agentes', value: '12', icon: 'lucideBot', trendLabel: '+2 este mês', trend: 'up' as const },
  { label: 'Execuções', value: '1.482', icon: 'lucideActivity', trendLabel: '+12%', trend: 'up' as const },
  { label: 'Tokens', value: '3.4M', icon: 'lucideZap', trendLabel: '+10%', trend: 'up' as const },
  { label: 'Custo (USD)', value: '$28.40', icon: 'lucideDollarSign', trendLabel: '-8%', trend: 'down' as const },
];

export const EXECUTIONS_CHART_DATA = [
  { day: '01/09', value: 42 },
  { day: '05/09', value: 68 },
  { day: '10/09', value: 55 },
  { day: '15/09', value: 90 },
  { day: '20/09', value: 76 },
  { day: '25/09', value: 110 },
  { day: '30/09', value: 95 },
];

export const AGENT_TYPES_DISTRIBUTION = [
  { label: 'Assistentes', value: 6, color: '#6366f1' },
  { label: 'Pesquisa', value: 3, color: '#22c55e' },
  { label: 'Automação', value: 2, color: '#f59e0b' },
  { label: 'Análise', value: 1, color: '#0ea5e9' },
];

export const RECENT_EXECUTIONS: ExecutionRecord[] = [
  { id: '1', agentName: 'Agente de Suporte', status: 'Sucesso', durationLabel: '12.4s', startedAt: 'Hoje, 14:32' },
  { id: '2', agentName: 'Research Assistant', status: 'Sucesso', durationLabel: '28.1s', startedAt: 'Hoje, 13:18' },
  { id: '3', agentName: 'Análise de Documentos', status: 'Falha', durationLabel: '5.2s', startedAt: 'Hoje, 11:03' },
  { id: '4', agentName: 'Agente de Vendas', status: 'Sucesso', durationLabel: '18.7s', startedAt: 'Ontem, 09:45' },
  { id: '5', agentName: 'Agente Financeiro', status: 'Executando', durationLabel: '—', startedAt: 'Ontem, 16:20' },
];
