import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  template: `
    <div class="page">
      <app-header></app-header>
      <div class="page__content m-2">
          <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
})
export class StoreComponent{

  constructor() { }

}
