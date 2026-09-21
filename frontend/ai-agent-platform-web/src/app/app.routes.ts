import { Routes } from '@angular/router';
import { AppShell } from './layout/app-shell/app-shell';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then((m) => m.Login),
  },
  {
    path: '',
    component: AppShell,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'agents/new',
        loadComponent: () => import('./features/agent-builder/agent-builder').then((m) => m.AgentBuilder),
      },
      {
        path: 'agents',
        loadComponent: () => import('./features/agents/agents').then((m) => m.Agents),
      },
      {
        path: 'templates',
        loadComponent: () => import('./features/agent-gallery/agent-gallery').then((m) => m.AgentGallery),
      },
      {
        path: 'playground',
        loadComponent: () => import('./features/playground/playground').then((m) => m.Playground),
      },
      {
        path: 'executions',
        loadComponent: () => import('./features/executions/executions').then((m) => m.Executions),
      },
      {
        path: 'conversations',
        loadComponent: () => import('./features/conversations/conversations').then((m) => m.Conversations),
      },
      {
        path: 'knowledge',
        loadComponent: () => import('./features/knowledge/knowledge').then((m) => m.Knowledge),
      },
      {
        path: 'tools',
        loadComponent: () => import('./features/tools/tools').then((m) => m.Tools),
      },
      {
        path: 'usage',
        loadComponent: () => import('./features/usage/usage').then((m) => m.Usage),
      },
      {
        path: 'billing',
        loadComponent: () => import('./features/billing/billing').then((m) => m.Billing),
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings').then((m) => m.Settings),
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
