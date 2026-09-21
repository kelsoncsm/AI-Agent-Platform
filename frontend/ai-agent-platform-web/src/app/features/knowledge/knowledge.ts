import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';
import { MOCK_KNOWLEDGE_BASES, SUPPORTED_EXTENSIONS } from './knowledge.mock';

@Component({
  selector: 'app-knowledge',
  imports: [NgIcon, PageHeader, StatusBadge],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {
  protected readonly bases = MOCK_KNOWLEDGE_BASES;
  protected readonly extensions = SUPPORTED_EXTENSIONS;
}
