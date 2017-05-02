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

  public cats:any = [];

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private api: ApiService) {}

  public ionViewWillEnter() {
    this.loadTimeline();
  }

  private showLoading(): void {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  public random(): number{
    return Math.floor(Math.random() * 10000);
  }

  public loadTimeline(refresher?) {
    !refresher && this.showLoading();
    this.api.cats().subscribe((data) => {
      console.log(data)
      this.cats = data;
      refresher? refresher.complete() : this.loading.dismiss();

    })
  }

  private showError(text): void {
    // this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Error',
      message: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
