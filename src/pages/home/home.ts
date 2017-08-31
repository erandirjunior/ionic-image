import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RequestsProvider} from "../../providers/requests/requests";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public feeds: Array<any>;

  private url: string = "https://www.reddit.com/new.json";

  constructor(public navCtrl: NavController, private list: RequestsProvider, public http: Http) {
    /*this.list.listJson().map(res => res.json())
      .subscribe(data => {

        this.feeds = data.data.children;
      });*/
  }

}
