import { ConversationSummary } from '../../core/models/models';

/** Dados fictícios — camada visual, sem integração real. */
export const MOCK_CONVERSATIONS: ConversationSummary[] = [
  { id: '1', agentName: 'Agente de Suporte', channel: 'Web Chat', lastMessage: 'Obrigado pela ajuda!', updatedAt: 'Hoje, 15:02', status: 'Encerrada' },
  { id: '2', agentName: 'Agente de Vendas', channel: 'WhatsApp', lastMessage: 'Pode enviar a proposta?', updatedAt: 'Hoje, 12:47', status: 'Ativa' },
  { id: '3', agentName: 'Research Assistant', channel: 'Web Chat', lastMessage: 'Segue o resumo solicitado.', updatedAt: 'Ontem, 18:30', status: 'Encerrada' },
  { id: '4', agentName: 'Agente Financeiro', channel: 'API', lastMessage: 'Relatório gerado com sucesso.', updatedAt: 'Ontem, 10:15', status: 'Ativa' },
  { id: '5', agentName: 'Assistente de RH', channel: 'Web Chat', lastMessage: 'Currículo analisado.', updatedAt: '02/09, 09:20', status: 'Encerrada' },
];
