import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from './../../providers/servidor/servidor';

/**
 * Generated class for the JogosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jogos',
  templateUrl: 'jogos.html',
})
export class JogosPage {

  tipoFalta: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider) {
    this.getRetornar();
  }

  getRetornar(){
    this.servidor.getPegar()
      .subscribe(
        data => this.tipoFalta = data,
        err => console.log(err)
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JogosPage');
  }

  onJogos() : void {
    this.navCtrl.push('JogosPage');
  }
}
