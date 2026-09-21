import { Component, computed, signal } from '@angular/core';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';
import { MOCK_CONVERSATIONS } from './conversations.mock';

@Component({
  selector: 'app-conversations',
  imports: [PageHeader, SearchInput, StatusBadge, EmptyState],
  templateUrl: './conversations.html',
  styleUrl: './conversations.scss',
})
export class Conversations {
  protected readonly search = signal('');

  protected readonly filtered = computed(() => {
    const search = this.search().trim().toLowerCase();
    return MOCK_CONVERSATIONS.filter((c) => !search || c.agentName.toLowerCase().includes(search));
  });
}
