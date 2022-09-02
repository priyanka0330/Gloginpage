import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gloginpage';
  sideNavStatus: boolean = false;
  showHead: boolean = false;


  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/login' || event['url'] == '/signup' ||event['url'] == '/' ) {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
        }
      });
    }
  // constructor(private router: Router) {
  //   // on route change to '/login', set the variable showHead to false
  //     router.events.forEach((event) => {
  //       if (event instanceof NavigationStart) {
  //         if (event['url'] == '/login' || event['url'] == '/signup') {
  //           this.sideNavStatus = false;
  //         } else {
  //           // console.log("NU")
  //           this.sideNavStatus = true;
  //         }
  //       }
  //     });
  //   }
}

