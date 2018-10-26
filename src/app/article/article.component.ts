import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  post = {};

  constructor(private route : ActivatedRoute, private config : ConfigService, private location : Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.post = this.getPost(id);
  }

  getPost(id: number) {
    return this.config.getPostByID(id);
  }

  goBack() {
    this.location.back();
  }

}
