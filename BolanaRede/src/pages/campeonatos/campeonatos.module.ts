import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampeonatosPage } from './campeonatos';

@NgModule({
  declarations: [
    CampeonatosPage,
  ],
  imports: [
    IonicPageModule.forChild(CampeonatosPage),
  ],
})
export class CampeonatosPageModule {}
