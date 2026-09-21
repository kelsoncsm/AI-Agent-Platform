import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';
import { BILLING_PLAN, BILLING_USAGE, MOCK_INVOICES } from './billing.mock';

@Component({
  selector: 'app-billing',
  imports: [NgIcon, PageHeader, StatusBadge],
  templateUrl: './billing.html',
  styleUrl: './billing.scss',
})
export class Billing {
  protected readonly plan = BILLING_PLAN;
  protected readonly usage = BILLING_USAGE;
  protected readonly invoices = MOCK_INVOICES;
}
