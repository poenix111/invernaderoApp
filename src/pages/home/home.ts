import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { PlantaPage } from '../planta/planta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  invernaderos =[];
  plantaPage = PlantaPage;
  constructor(public navCtrl: NavController, public navParams:NavParams, public http:Http) {
    console.log(this.navParams.get('usuario'));
    this.getInvernaderos();
    
  }
  clickPlanta(i){
    this.navCtrl.push(this.plantaPage,i);
  }
  getInvernaderos(){
    this.http.get('/invernadero/?usuario=' + this.navParams.get('usuario')).subscribe(data =>{
      console.log(data.text());
      this.invernaderos = data.json();
    },error =>{
      console.log('error');
    });

  }
}
