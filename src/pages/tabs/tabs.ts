import { Component } from '@angular/core';

import { CatPage } from '../cat/cat';
import { QuotePage } from '../quote/quote';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CatPage;
  tab2Root = QuotePage;

  constructor() {

  }
}
