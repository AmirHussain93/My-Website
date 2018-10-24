import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activeTab = 'home';
  constructor() { }

  ngOnInit() {
  }

  getActiveTab(tabname: string) {
    this.activeTab = tabname;
  }

}
