import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {

  public lecturers:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public http: HttpClient) {
    this.getLecturer();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }

  getLecturer(){
    let url = 'https://jsonplaceholder.typicode.com/users';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.lecturers = result;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultPage');
  }

}
