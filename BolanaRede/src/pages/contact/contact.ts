import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  textHide(e1) : void {
    var display = document.getElementById(e1).style.display;
    if(display == "none"){
      document.getElementById(e1).style.display = 'block';
    }else{
      document.getElementById(e1).style.display = 'none';
    }
  }

}
