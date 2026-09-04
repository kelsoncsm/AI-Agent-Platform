import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Visão Geral', route: '/dashboard', icon: 'lucideLayoutDashboard' },
  { label: 'Agentes', route: '/agents', icon: 'lucideBot' },
  { label: 'Templates', route: '/templates', icon: 'lucideLayoutTemplate' },
  { label: 'Playground', route: '/playground', icon: 'lucideMessageSquare' },
  { label: 'Execuções', route: '/executions', icon: 'lucideActivity' },
  { label: 'Conversas', route: '/conversations', icon: 'lucideMessagesSquare' },
  { label: 'Knowledge Base', route: '/knowledge', icon: 'lucideBookOpen' },
  { label: 'Ferramentas', route: '/tools', icon: 'lucideWrench' },
  { label: 'Uso', route: '/usage', icon: 'lucideBarChart3' },
  { label: 'Configurações', route: '/settings', icon: 'lucideSettings' },
];

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, NgIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly open = input(false);
  readonly linkClicked = output<void>();

  protected readonly navItems = NAV_ITEMS;

  protected readonly user = {
    name: 'João da Silva',
    email: 'joao@empresa.com',
    initials: 'JS',
  };
}
