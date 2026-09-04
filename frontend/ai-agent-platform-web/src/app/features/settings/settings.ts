import { Component, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { PageHeader } from '../../shared/components/page-header/page-header';

type SettingsTab = 'Geral' | 'Modelos de IA' | 'Ferramentas' | 'Knowledge Base' | 'Equipe' | 'Segurança';

const TABS: SettingsTab[] = ['Geral', 'Modelos de IA', 'Ferramentas', 'Knowledge Base', 'Equipe', 'Segurança'];

const TIMEZONES = ['America/Sao_Paulo', 'America/New_York', 'Europe/Lisbon', 'UTC'];
const LANGUAGES = ['Português (Brasil)', 'English (US)', 'Español'];

@Component({
  selector: 'app-settings',
  imports: [NgIcon, PageHeader, EmptyState],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  protected readonly tabs = TABS;
  protected readonly timezones = TIMEZONES;
  protected readonly languages = LANGUAGES;

  protected readonly activeTab = signal<SettingsTab>('Geral');
  protected readonly orgName = signal('Sua Empresa');
  protected readonly timezone = signal(TIMEZONES[0]);
  protected readonly language = signal(LANGUAGES[0]);
}
