import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';
import { MOCK_TEMPLATES, TEMPLATE_CATEGORIES } from './agent-gallery.mock';

@Component({
  selector: 'app-agent-gallery',
  imports: [NgIcon, PageHeader, SearchInput, StatusBadge],
  templateUrl: './agent-gallery.html',
  styleUrl: './agent-gallery.scss',
})
export class AgentGallery {
  protected readonly categories = TEMPLATE_CATEGORIES;
  protected readonly activeCategory = signal('Todos');
  protected readonly search = signal('');

  protected readonly filteredTemplates = computed(() => {
    const category = this.activeCategory();
    const search = this.search().trim().toLowerCase();

    return MOCK_TEMPLATES.filter((template) => {
      const matchesCategory = category === 'Todos' || template.category === category;
      const matchesSearch = !search || template.name.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  });

  constructor(private readonly router: Router) {}

  protected useTemplate(templateId: string): void {
    this.router.navigate(['/agents/new'], { queryParams: { template: templateId } });
  }
}
