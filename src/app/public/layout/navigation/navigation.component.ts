import { MenuItem } from './menu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  title: string;
  menuItems: MenuItem[];

  constructor() {
    this.title = 'Ng4 Application';
    this.menuItems = [
      new MenuItem('/home', 'Home', 'home'),
      new MenuItem('/calculator', 'Calculator', 'calculator'),
      new MenuItem('/counters', 'Counters', 'counter'),
    ];
  }

  ngOnInit() {
  }

}
