import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';
import {
  AGENT_TYPES_DISTRIBUTION,
  DASHBOARD_STATS,
  EXECUTIONS_CHART_DATA,
  RECENT_EXECUTIONS,
} from './dashboard.mock';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, PageHeader, StatCard, StatusBadge],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly stats = DASHBOARD_STATS;
  protected readonly executions = RECENT_EXECUTIONS;
  protected readonly agentTypesTotal = AGENT_TYPES_DISTRIBUTION.reduce((sum, item) => sum + item.value, 0);

  protected readonly chartMax = Math.max(...EXECUTIONS_CHART_DATA.map((point) => point.value));
  protected readonly chartData = EXECUTIONS_CHART_DATA.map((point) => ({
    ...point,
    heightPercent: Math.round((point.value / this.chartMax) * 100),
  }));

  protected readonly agentTypes = this.buildDonutSegments();
  protected readonly donutBackground = this.agentTypes.map((s) => `${s.color} ${s.start}% ${s.end}%`).join(', ');

  private buildDonutSegments() {
    let cursor = 0;
    return AGENT_TYPES_DISTRIBUTION.map((item) => {
      const start = cursor;
      const percent = (item.value / this.agentTypesTotal) * 100;
      cursor += percent;
      return { ...item, start, end: cursor };
    });
  }
}
