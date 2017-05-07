import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController, AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';
import { ApiService } from '../../app/api.service';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  public loading: Loading;
  public title: string = 'We Love Math...';
  public type:any = 'trivia';
  public list:any = [];

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private api: ApiService) {}

  public ionViewWillEnter() {
    this.loadTimeline();
  }



  public loadTimeline(refresher?) {
    this.showLoading(refresher);
    // every time we scroll up, we refresh the cats list

    // TODO
    // Use this.api.numbers to get the data then add them in this.list


  }

  public tabChanged(){
    console.log("The tab changed");
    // TODO
    // reload the timeline when the tab change

  }

  private showLoading(refresher?): void {
    if(!refresher){
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      this.loading.present();
    }
  }

  private hideLoading(refresher?): void{
    if(refresher){
      refresher.complete()
    } else {
      this.loading.dismiss();
    }
  }
}
