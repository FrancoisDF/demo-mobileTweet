import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController, AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';
import { ApiService } from '../../app/api.service';

@Component({
  selector: 'page-cat',
  templateUrl: 'cat.html'
})
export class CatPage {
  public loading: Loading;
  public title:string  = 'Cat Facts';
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
    this.api.cats().subscribe((data) => {
      this.list = data;
      this.hideLoading(refresher);
    }, error => {
      this.hideLoading(refresher);
    })
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
