import { Invoice } from '../../core/models/models';

/** Dados fictícios — camada visual, sem integração real. */
export const BILLING_PLAN = {
  name: 'Pro',
  priceLabel: '$99/mês',
};

export const BILLING_USAGE = [
  { label: 'Agentes', usedLabel: '12', limitLabel: '50', percent: 24 },
  { label: 'Tokens', usedLabel: '3.4M', limitLabel: '10M', percent: 34 },
  { label: 'Execuções', usedLabel: '1.482', limitLabel: '5.000', percent: 30 },
  { label: 'Storage', usedLabel: '2.1 GB', limitLabel: '5 GB', percent: 42 },
];

export const MOCK_INVOICES: Invoice[] = [
  { id: '1', date: '01/09/2026', amountLabel: '$99.00', status: 'Pago' },
  { id: '2', date: '01/08/2026', amountLabel: '$99.00', status: 'Pago' },
  { id: '3', date: '01/07/2026', amountLabel: '$99.00', status: 'Pago' },
  { id: '4', date: '01/06/2026', amountLabel: '$79.00', status: 'Pago' },
];
