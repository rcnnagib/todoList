import { Component } from '@angular/core';

import { PoMenuPanelItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title: string = '';

  public readonly menuItems: Array<PoMenuPanelItem> = [    
    { label: 'Trabalho', action: this.changeTitle, icon: 'po-icon-clock', link:"/trabalho" },
    { label: 'Estudos', action: this.changeTitle, icon: 'po-icon-book', link:"/estudos" },
    { label: 'financeiro', action: this.changeTitle, icon: 'po-icon-finance', link:"/financeiro"  }
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
  }

}