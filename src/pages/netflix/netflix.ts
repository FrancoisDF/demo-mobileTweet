import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';
import { ApiService } from '../../app/api.service';

@Component({
  selector: 'page-netflix',
  templateUrl: 'netflix.html'
})
export class NetflixPage {
  public loading: Loading;

  public netflixList:any = [];

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

  public loadTimeline(refresher?) {

    !refresher && this.showLoading();

    this.api.netflix().subscribe((data) => {
      this.netflixList = data;
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
