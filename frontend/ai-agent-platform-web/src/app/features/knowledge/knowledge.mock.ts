import { KnowledgeBaseSummary } from '../../core/models/models';

/** Dados fictícios — camada visual, sem integração real. */
export const MOCK_KNOWLEDGE_BASES: KnowledgeBaseSummary[] = [
  { id: '1', name: 'Base Comercial', documentCount: 24, sizeLabel: '128 MB', updatedAt: 'Hoje, 09:10', status: 'Ativo' },
  { id: '2', name: 'Documentação Interna', documentCount: 57, sizeLabel: '340 MB', updatedAt: 'Ontem, 17:45', status: 'Ativo' },
  { id: '3', name: 'FAQ Atendimento', documentCount: 12, sizeLabel: '18 MB', updatedAt: 'Ontem, 08:30', status: 'Ativo' },
  { id: '4', name: 'Manuais Técnicos', documentCount: 8, sizeLabel: '96 MB', updatedAt: '01/09, 14:00', status: 'Processando' },
];

export const SUPPORTED_EXTENSIONS = ['PDF', 'DOCX', 'TXT', 'MD'];
