import { ServidorProvider } from './../../providers/servidor/servidor';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public servidor: ServidorProvider) {

  }
  onTimes() : void {
    this.navCtrl.push('TimesPage');
  }

  onCampeonato() : void {
    this.navCtrl.push('CampeonatosPage');
  }

  onJogos() : void {
    this.navCtrl.push('JogosPage');
  }
}
