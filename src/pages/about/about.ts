import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RequestsProvider} from "../../providers/requests/requests";
import {Http} from "@angular/http";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private dados: any;

  constructor(public navCtrl: NavController, private requestsProvider: RequestsProvider, private http: Http) {
    /*this.requestsProvider.sendPost().map(res => res.json())
      .subscribe(data => {
        console.log(data);

        this.dados = data.text;
      });*/
  }

}
