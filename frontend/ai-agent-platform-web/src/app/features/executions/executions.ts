import { Component, computed, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';
import { MOCK_EXECUTIONS } from './executions.mock';

const PAGE_SIZE = 5;

@Component({
  selector: 'app-executions',
  imports: [NgIcon, PageHeader, SearchInput, StatusBadge],
  templateUrl: './executions.html',
  styleUrl: './executions.scss',
})
export class Executions {
  protected readonly search = signal('');
  protected readonly page = signal(1);

  private readonly filtered = computed(() => {
    const search = this.search().trim().toLowerCase();
    return MOCK_EXECUTIONS.filter((execution) => !search || execution.agentName.toLowerCase().includes(search));
  });

  protected readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / PAGE_SIZE)));

  protected readonly pagedExecutions = computed(() => {
    const start = (this.page() - 1) * PAGE_SIZE;
    return this.filtered().slice(start, start + PAGE_SIZE);
  });

  protected setSearch(value: string): void {
    this.search.set(value);
    this.page.set(1);
  }

  protected goToPage(page: number): void {
    this.page.set(Math.min(Math.max(page, 1), this.totalPages()));
  }
}
