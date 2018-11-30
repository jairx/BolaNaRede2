import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { ServidorProvider } from '../../providers/servidor/servidor';

/**
 * Generated class for the CadastrotimesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrotimes',
  templateUrl: 'cadastrotimes.html',
})
export class CadastrotimesPage {

  nomeTime: string;
  corCamisa1: string;
  corCamisa2: string;
  corCamisa3: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public servidor: ServidorProvider, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrotimesPage');
  }

  cadastrar() {
    if(this.nomeTime == '' || this.nomeTime == undefined ||
        this.corCamisa1 == '' || this.corCamisa1 == undefined) {

        let alert = this.alertCtrl.create({

          title: 'Atenção',
          message: 'Preencha todos os campos!',
          buttons: ['OK']

        })

        alert.present();

    }else{

        this.http.get(this.servidor.urlGet()+'cadastrarTime.php?nomeTime='+this.nomeTime+
                        '&corCamisa1='+this.corCamisa1+'&corCamisa2='+this.corCamisa2+
                        '&corCamisa3='+this.corCamisa3).pipe(map( res => res.json()))
                        .subscribe(

                          dados => {

                            if(dados.valida.teste==1) {

                              let alert = this.alertCtrl.create({

                                title: 'Sucesso',
                                message: 'Seleção cadastrada.',
                                buttons: ['OK']

                              })

                              alert.present();

                              this.navCtrl.setRoot('TimesPage');

                            }

                          }

                        )

      }
  }

}
