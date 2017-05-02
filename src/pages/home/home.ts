import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController, AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';
// import { InAppBrowser } from 'ionic-native';

// let urlCat;
// if (window['cordova']) {
//   url = 'http://catfacts-api.appspot.com/api/facts?number=10';
//   urlMath = 'http://numbersapi.com/#random/date'
// } else {
//   url = '/cats/facts?number=20';
// }


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loading: Loading;

  public tweets:any = [];

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private http: Http) {}


  public ionViewWillEnter() {
    this.loadTimeline();
  }

  public openLinkUrl(url) {
    // let browser = new InAppBrowser(url, 'blank');
    // browser.show();
  }

  private showLoading(): void {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }


  public loadTimeline(refresher?) {

    !refresher && this.showLoading();

    // this.http.get(url).subscribe((res) => {
    //   this.tweets = res.json().facts;
    //   refresher? refresher.complete() : this.loading.dismiss();
    //
    // })
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


  public composeTweet() {
    let prompt = this.alertCtrl.create({
      title: 'New Tweet',
      message: "Write your Tweet message below",
      inputs: [
        {
          name: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Tweet',
          handler: data => {
            console.log('Saved clicked: ', data.text);
            // this.postTweet(data.text);
          }
        }
      ]
    });
    prompt.present();
  }
}
