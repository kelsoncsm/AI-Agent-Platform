import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-empty-state',
  imports: [NgIcon],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.scss',
})
export class EmptyState {
  readonly icon = input<string>('lucideInbox');
  readonly title = input.required<string>();
  readonly description = input<string>();
}
