import { Component, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { SearchInput } from '../../shared/components/search-input/search-input';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, NgIcon, SearchInput],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  readonly menuToggle = output<void>();

  protected readonly userMenuOpen = signal(false);

  protected toggleUserMenu(): void {
    this.userMenuOpen.update((open) => !open);
  }

  protected closeUserMenu(): void {
    this.userMenuOpen.set(false);
  }
}
