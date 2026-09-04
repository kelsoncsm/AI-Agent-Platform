import { AgentTemplate } from '../../core/models/models';

/** Dados fictícios — camada visual, sem integração real. */
export const TEMPLATE_CATEGORIES = ['Todos', 'Suporte', 'Vendas', 'Finanças', 'RH', 'Análise', 'Pesquisa', 'Automação'];

export const MOCK_TEMPLATES: AgentTemplate[] = [
  {
    id: '1',
    name: 'Suporte ao Cliente',
    description: 'Atendimento com base em documentos da empresa.',
    category: 'Suporte',
    icon: 'lucideHeadphones',
  },
  {
    id: '2',
    name: 'Research Assistant',
    description: 'Pesquisa e resumo de informações da web.',
    category: 'Pesquisa',
    icon: 'lucideSearch',
  },
  {
    id: '3',
    name: 'Análise de Documentos',
    description: 'Extração e análise de dados de PDFs e arquivos.',
    category: 'Análise',
    icon: 'lucideFileText',
  },
  {
    id: '4',
    name: 'Qualificação de Leads',
    description: 'Identifica e qualifica leads automaticamente.',
    category: 'Vendas',
    icon: 'lucideTrendingUp',
  },
  {
    id: '5',
    name: 'Análise Financeira',
    description: 'Analisa dados financeiros e gera relatórios.',
    category: 'Finanças',
    icon: 'lucideDollarSign',
  },
  {
    id: '6',
    name: 'Assistente de RH',
    description: 'Triagem de currículos e análise de perfis.',
    category: 'RH',
    icon: 'lucideUsers',
  },
];
