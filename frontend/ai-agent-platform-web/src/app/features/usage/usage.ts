import { Component } from '@angular/core';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { USAGE_BARS, USAGE_STATS } from './usage.mock';

@Component({
  selector: 'app-usage',
  imports: [PageHeader, StatCard],
  templateUrl: './usage.html',
  styleUrl: './usage.scss',
})
export class Usage {
  protected readonly stats = USAGE_STATS;
  protected readonly bars = USAGE_BARS;
}
