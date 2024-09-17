import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Grocery Tracker';
  homePage = 'Home Page';
  homeBtnColor = 'green';

  constructor(private router: Router) {

  }

  hasRoute(route: string) {
    return this.router.url !== route;
  }

}
