import { Component, computed, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { MOCK_AGENTS } from '../agents/agents.mock';
import { AVAILABLE_KNOWLEDGE_BASES, AVAILABLE_MODELS, MOCK_CONVERSATION, PlaygroundMessage } from './playground.mock';

interface ToolChip {
  name: string;
  enabled: boolean;
}

@Component({
  selector: 'app-playground',
  imports: [NgIcon],
  templateUrl: './playground.html',
  styleUrl: './playground.scss',
})
export class Playground {
  protected readonly agents = MOCK_AGENTS;
  protected readonly models = AVAILABLE_MODELS;
  protected readonly knowledgeBases = AVAILABLE_KNOWLEDGE_BASES;

  protected readonly selectedAgentId = signal(this.agents[0].id);
  protected readonly messages = signal<PlaygroundMessage[]>([...MOCK_CONVERSATION]);
  protected readonly draft = signal('');
  protected readonly model = signal(AVAILABLE_MODELS[0]);
  protected readonly temperature = signal(0.7);
  protected readonly knowledgeBase = signal(AVAILABLE_KNOWLEDGE_BASES[0]);

  protected readonly toolChips = signal<ToolChip[]>([
    { name: 'HTTP API', enabled: true },
    { name: 'Knowledge Base', enabled: true },
    { name: 'Calendar', enabled: false },
  ]);

  protected readonly selectedAgent = computed(() => this.agents.find((a) => a.id === this.selectedAgentId()) ?? this.agents[0]);

  protected selectAgent(agentId: string): void {
    this.selectedAgentId.set(agentId);
  }

  protected sendMessage(): void {
    const text = this.draft().trim();
    if (!text) return;

    this.messages.update((list) => [...list, { role: 'user', text }]);
    this.draft.set('');
  }

  protected clearConversation(): void {
    this.messages.set([]);
  }

  protected toggleToolChip(chip: ToolChip): void {
    this.toolChips.update((list) => list.map((c) => (c === chip ? { ...c, enabled: !c.enabled } : c)));
  }
}
