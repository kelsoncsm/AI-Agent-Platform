import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';
import { MOCK_TOOLS } from './tools.mock';

@Component({
  selector: 'app-tools',
  imports: [NgIcon, PageHeader, StatusBadge],
  templateUrl: './tools.html',
  styleUrl: './tools.scss',
})
export class Tools {
  protected readonly tools = MOCK_TOOLS;
}
