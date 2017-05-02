import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { forEach } from 'lodash';

let baseHttp = '';
let baseHttps = '';

if (window['cordova'] || (window && window['process'] && window['process']['type'])) {
  baseHttp = 'http://';
  baseHttps = 'https://'
}

@Injectable()
export class ApiService {

  private apiUrl: string;

  private options: RequestOptions = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-Mashape-Key': 'rIbisYfbtPmshsN2GmUauOaMwV3Mp1KRVN0jsnCbYW5WK917tV'
    })
  });

  constructor (private http: Http) {}

  public random(): number{
    return Math.floor(Math.random() * 10000);
  }

  public cats(): Observable<Object> {
    let url = baseHttp + 'catfacts-api.appspot.com/api/facts?number=8 ';
    /*
    [{
      text: 'facts ..',
      picture: 'random picture of a cat...'
    ]
    */
    return this.http.get(url)
      .map((res: Response) => {
        const list: any[] = res.json().facts;
        const listObj: any[] = [];
        forEach(list, text => {
          listObj.push({
            text: text,
            category: 'food for thought',
            picture: 'http://thecatapi.com/api/images/get?format=src&' + this.random()
          })
        });
        return listObj;
      })
  }

  public netflix(){
    /*
    [{
      "unit": 7474,
      "show_id": 70153391,
      "show_title": "The Boondocks",
      "release_year": "2005",
      "rating": "4.0",
      "category": "TV Shows",
      "show_cast": "Regina King, John Witherspoon, Cedric Yarbrough, Gary Anthony Williams, Jill Talley, Gabby Soleil",
      "director": "",
      "summary": "Based on the comic strip by Aaron McGruder, this satirical animated series follows the socially conscious misadventures of Huey Freeman, a preternaturally smart 10-year-old who relocates from inner-city Chicago to the suburbs.",
      "poster": "http://netflixroulette.net/api/posters/70153391.jpg",
      "mediatype": 1,
      "runtime": "20 min"
      }]
    */
    let url = baseHttps + 'community-netflix-roulette.p.mashape.com/api.php';

    return this.http.get(url, this.options)
      .map((res: Response) => [res.json()]);
  }

  public numbers(type= 'trivia'){
    /*
    {
      "text": "300 is the number of pounds per square inch of pressure to break the shell of Macadamia nuts.",
      "number": 300,
      "found": true,
      "type": "trivia"
    }
    */

    let url = baseHttps + 'numbersapi.p.mashape.com/random/{type}';

    return this.http.get(url, this.options)
       .map((res: Response) => res.json());
  }

  public quotes(){
    /*
    [{
      "quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
      "author": "Sherlock Holmes",
      "category": "Famous",
    }]
    */
    let url = baseHttps + 'andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10';
    return this.http.get(url, this.options)
      .map((res: Response) => res.json());
  }
}