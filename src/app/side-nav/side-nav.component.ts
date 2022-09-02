import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
 @Input() sideNavStatus: boolean = false;

  list = [
    {
      number:'1',
      name: 'home',
      icon:'fa-solid fa-house',
      link: '/home'
    },
    {
      number:'2',
      name: 'Products',
      icon:'fa-solid fa-box',
      link: '/products'
    },
    {
      number:'3',
      name: 'Order',
      icon:'fa-solid fa-cart-shopping',
      link: '/order'
    },
    {
      number:'4',
      name: 'Analytics',
      icon:'fa-solid fa-chart-line',
      link: '/analytics'
    },
    {
      number:'5',
      name: 'Settings',
      icon:'fa-solid fa-gear',
      link: '/settings'
    },
    {
      number:'6',
      name: 'About Us',
      icon:'fa-solid fa-circle-info',
      link: '/aboutus'
    },
    {
      number:'7',
      name: 'Contact',
      icon:'fa-solid fa-phone',
      link: '/contact'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
