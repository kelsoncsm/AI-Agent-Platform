import { Component, input, model } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-search-input',
  imports: [NgIcon],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
})
export class SearchInput {
  readonly placeholder = input<string>('Buscar...');
  readonly value = model<string>('');

  protected onInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
