import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FloorplanPage } from '../../pages/floorplan/floorplan';
import { AboutPage } from '../../pages/about/about';
/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  constructor(public navCtrl: NavController) {

  }

  openFloorplan(){
    this.navCtrl.push(FloorplanPage)
  }

  openAbout(){
    this.navCtrl.push(AboutPage)
  }
}
