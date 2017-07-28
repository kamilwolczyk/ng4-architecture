import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  app: string;

  ngOnInit() {
    this.app = "Public app";
    this.title = "Advanced front-end app architecture";
  }
}
