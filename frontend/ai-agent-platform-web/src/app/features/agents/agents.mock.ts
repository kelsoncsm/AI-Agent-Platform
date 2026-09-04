import { Agent } from '../../core/models/models';

/** Dados fictícios — camada visual, sem integração real. */
export const MOCK_AGENTS: Agent[] = [
  {
    id: '1',
    name: 'Agente de Suporte',
    description: 'Atendimento ao cliente com base em documentos.',
    status: 'Ativo',
    icon: 'lucideHeadphones',
    createdAt: '10/09/2026',
  },
  {
    id: '2',
    name: 'Research Assistant',
    description: 'Pesquisa e resumo de informações da web.',
    status: 'Ativo',
    icon: 'lucideSearch',
    createdAt: '08/09/2026',
  },
  {
    id: '3',
    name: 'Análise de Documentos',
    description: 'Extração e análise de dados de PDFs e arquivos.',
    status: 'Ativo',
    icon: 'lucideFileText',
    createdAt: '05/09/2026',
  },
  {
    id: '4',
    name: 'Agente de Vendas',
    description: 'Qualificação de leads e follow-up.',
    status: 'Inativo',
    icon: 'lucideTrendingUp',
    createdAt: '02/09/2026',
  },
  {
    id: '5',
    name: 'Agente Financeiro',
    description: 'Análise de dados financeiros.',
    status: 'Ativo',
    icon: 'lucideDollarSign',
    createdAt: '28/08/2026',
  },
  {
    id: '6',
    name: 'Assistente de RH',
    description: 'Triagem de currículos e análise de perfis.',
    status: 'Ativo',
    icon: 'lucideUsers',
    createdAt: '25/08/2026',
  },
];
