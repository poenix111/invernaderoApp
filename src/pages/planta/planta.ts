import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the PlantaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planta',
  templateUrl: 'planta.html',
})
export class PlantaPage {
  
  plantas =[];
  nombre;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let id = this.navParams.get('id');
    this.http.get("/planta/?id=" + id).subscribe(data =>{
      this.plantas = data.json();
    },error =>{
      console.log("ERROR");
    })
    console.log(id);
    this.nombre = this.navParams.get('nombre');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlantaPage');
  }

}
