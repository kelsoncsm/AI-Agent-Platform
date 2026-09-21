import { ExecutionRecord } from '../../core/models/models';

/** Dados fictícios — camada visual, sem integração real. */
export const MOCK_EXECUTIONS: ExecutionRecord[] = [
  { id: '1', agentName: 'Agente de Suporte', status: 'Sucesso', durationLabel: '12.4s', tokens: '1.2K', cost: '$0.02', startedAt: 'Hoje, 14:32' },
  { id: '2', agentName: 'Research Assistant', status: 'Sucesso', durationLabel: '28.1s', tokens: '3.4K', cost: '$0.06', startedAt: 'Hoje, 13:18' },
  { id: '3', agentName: 'Análise de Documentos', status: 'Falha', durationLabel: '5.2s', tokens: '0.4K', cost: '$0.01', startedAt: 'Hoje, 11:03' },
  { id: '4', agentName: 'Agente de Vendas', status: 'Sucesso', durationLabel: '18.7s', tokens: '2.1K', cost: '$0.04', startedAt: 'Ontem, 09:45' },
  { id: '5', agentName: 'Agente Financeiro', status: 'Executando', durationLabel: '—', tokens: '—', cost: '—', startedAt: 'Ontem, 16:20' },
  { id: '6', agentName: 'Assistente de RH', status: 'Sucesso', durationLabel: '14.3s', tokens: '1.5K', cost: '$0.03', startedAt: 'Ontem, 14:11' },
  { id: '7', agentName: 'Research Assistant', status: 'Sucesso', durationLabel: '26.9s', tokens: '3.1K', cost: '$0.05', startedAt: 'Ontem, 11:37' },
  { id: '8', agentName: 'Agente de Suporte', status: 'Falha', durationLabel: '6.8s', tokens: '0.6K', cost: '$0.01', startedAt: 'Ontem, 09:12' },
  { id: '9', agentName: 'Agente Financeiro', status: 'Sucesso', durationLabel: '31.2s', tokens: '4.0K', cost: '$0.08', startedAt: '02/09, 17:40' },
  { id: '10', agentName: 'Agente de Vendas', status: 'Sucesso', durationLabel: '9.5s', tokens: '0.9K', cost: '$0.02', startedAt: '02/09, 10:05' },
  { id: '11', agentName: 'Análise de Documentos', status: 'Sucesso', durationLabel: '22.0s', tokens: '2.7K', cost: '$0.05', startedAt: '01/09, 15:22' },
  { id: '12', agentName: 'Assistente de RH', status: 'Executando', durationLabel: '—', tokens: '—', cost: '—', startedAt: '01/09, 08:50' },
];
