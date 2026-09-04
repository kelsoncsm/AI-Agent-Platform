import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

export type StatCardTrend = 'up' | 'down' | 'neutral';

@Component({
  selector: 'app-stat-card',
  imports: [NgIcon],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  readonly label = input.required<string>();
  readonly value = input.required<string>();
  readonly icon = input.required<string>();
  readonly trendLabel = input<string>();
  readonly trend = input<StatCardTrend>('neutral');
}
