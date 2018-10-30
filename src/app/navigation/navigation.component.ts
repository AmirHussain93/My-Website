import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activeTab: string;
  isLoggedin: boolean;

  constructor(private location : Location, private auth : AuthenticationService) { }

  ngOnInit() {
    this.activeTab = this.location.path().replace('/','');
    console.log(this.activeTab)
  }

  getActiveTab(tabname: string) {
    this.activeTab = tabname;
    console.log(tabname)

  }

  logout() {
    this.auth.callLogout();
  }

}
