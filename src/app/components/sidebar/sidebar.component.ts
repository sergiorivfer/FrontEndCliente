import { Component, OnInit } from '@angular/core';
declare var $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/clientes', title: 'Clientes',  icon: '../../../assets/img/icons/user.svg', class: ''},
    { path: '/create-cliente', title: 'Guardar',  icon:'../../../assets/img/icons/add.svg', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[] = [];

  constructor(
  ) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
