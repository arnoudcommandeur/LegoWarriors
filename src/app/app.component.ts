import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Start',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Leaderboard',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Markt',
      url: '/markt',
      icon: 'markt'
    },
    {
      title: 'Inventory',
      url: '/battle',
      icon: 'battle'
    },
    {
      title: 'Levels',
      url: '/battle',
      icon: 'battle'
    },
    {
      title: 'Challanges',
      url: '/battle',
      icon: 'battle'
    },
    {
      title: 'Market',
      url: '/battle',
      icon: 'battle'
    },
    {
      title: 'Market',
      url: '/battle',
      icon: 'battle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
