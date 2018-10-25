import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client = {};

  constructor(private config : ConfigService) { }

  ngOnInit() {
    this.client = this.getClient();
  }

  getClient() {
    return this.config.getConfigData().clients;
  }
}
