/** Modelos compartilhados pela camada visual. Dados reais chegam nas próximas sprints. */

export type AgentStatus = 'Ativo' | 'Inativo';

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: AgentStatus;
  icon: string;
  createdAt: string;
}

export type ExecutionStatus = 'Sucesso' | 'Falha' | 'Executando';

export interface ExecutionRecord {
  id: string;
  agentName: string;
  status: ExecutionStatus;
  durationLabel: string;
  tokens?: string;
  cost?: string;
  startedAt: string;
}

export interface AgentTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
}

export interface ConversationSummary {
  id: string;
  agentName: string;
  channel: string;
  lastMessage: string;
  updatedAt: string;
  status: 'Ativa' | 'Encerrada';
}

export interface KnowledgeBaseSummary {
  id: string;
  name: string;
  documentCount: number;
  sizeLabel: string;
  updatedAt: string;
  status: 'Ativo' | 'Processando';
}

export interface ToolSummary {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'Ativo' | 'Inativo';
  permission: string;
}

export interface Invoice {
  id: string;
  date: string;
  amountLabel: string;
  status: 'Pago' | 'Pendente' | 'Vencido';
}
