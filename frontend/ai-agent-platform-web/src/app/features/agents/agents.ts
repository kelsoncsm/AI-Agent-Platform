import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';
import { MOCK_AGENTS } from './agents.mock';

type AgentsTab = 'Todos' | 'Ativos' | 'Inativos';

@Component({
  selector: 'app-agents',
  imports: [RouterLink, NgIcon, PageHeader, SearchInput, StatusBadge, EmptyState],
  templateUrl: './agents.html',
  styleUrl: './agents.scss',
})
export class Agents {
  protected readonly tabs: AgentsTab[] = ['Todos', 'Ativos', 'Inativos'];
  protected readonly activeTab = signal<AgentsTab>('Todos');
  protected readonly search = signal('');

  private readonly allAgents = MOCK_AGENTS;

  protected readonly filteredAgents = computed(() => {
    const tab = this.activeTab();
    const search = this.search().trim().toLowerCase();

    return this.allAgents.filter((agent) => {
      const matchesTab =
        tab === 'Todos' || (tab === 'Ativos' && agent.status === 'Ativo') || (tab === 'Inativos' && agent.status === 'Inativo');
      const matchesSearch = !search || agent.name.toLowerCase().includes(search);
      return matchesTab && matchesSearch;
    });
  });

  protected countFor(tab: AgentsTab): number {
    if (tab === 'Todos') return this.allAgents.length;
    if (tab === 'Ativos') return this.allAgents.filter((a) => a.status === 'Ativo').length;
    return this.allAgents.filter((a) => a.status === 'Inativo').length;
  }
}
