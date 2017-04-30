import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';
// import { InAppBrowser } from 'ionic-native';
import { appkey, token } from '../../config.twitter'
import { TwitterService } from 'ng2-twitter';


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
    private twitter: TwitterService) {}


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

    let url = '/twitter/1.1/statuses/home_timeline.json';

    // let url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
    let params = {count: 20};

    this.twitter.get(url, params, appkey, token).map(res => res.json()).subscribe((data) => {
      this.tweets = data;
      refresher? refresher.complete() : this.loading.dismiss();
    }, error => {
      refresher? refresher.complete() : this.loading.dismiss();
      this.showError(error);
    });
    //
    // setTimeout(()=>{
    //   this.tweets = [
    //     {
    //       user: {
    //         name : 'francois',
    //         profile_image_url: 'https://abs.twimg.com/a/1404172626/images/oauth_application.png'
    //       },
    //       created_at: 'today',
    //       text: 'My awesome fake post that doesn\'t do anything special, it\'s just here',
    //       entities:{
    //         urls: [{
    //           url: ''
    //         }]
    //       }
    //     },{
    //       user: {
    //         name : 'kevin',
    //         profile_image_url: 'https://abs.twimg.com/a/1404172626/images/oauth_application.png'
    //       },
    //       created_at: 'yesterday',
    //       text: 'A super cool tweet about everything I love!!!!!!',
    //       entities:{
    //         urls: [{
    //           url: ''
    //         }]
    //       }
    //     }
    //   ];
    //   refresher? refresher.complete() : this.loading.dismiss();
    // }, 1000);

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
