export interface PlaygroundMessage {
  role: 'user' | 'assistant';
  text: string;
}

/** Dados fictícios — camada visual, sem integração real. */
export const MOCK_CONVERSATION: PlaygroundMessage[] = [
  { role: 'user', text: 'Qual é o prazo de entrega padrão?' },
  { role: 'assistant', text: 'O prazo estimado é de 5 dias úteis para a maioria das regiões atendidas.' },
  { role: 'user', text: 'E para a região Sul?' },
  { role: 'assistant', text: 'Para a região Sul, o prazo médio é de 7 dias úteis, considerando a logística atual.' },
];

export const AVAILABLE_MODELS = ['GPT-4o', 'Claude Sonnet', 'Claude Haiku'];
export const AVAILABLE_KNOWLEDGE_BASES = ['Nenhuma', 'Base Comercial', 'Documentação Interna', 'FAQ Atendimento'];
