import { Injectable } from '@angular/core';
import { configuration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;

  constructor() { }

  getConfigData(){
    return this.config;
  }

  getPostByID(id: number) {
    console.log(this.config.blog.posts[id - 1]);
    return this.config.blog.posts[id - 1];
  }
}
