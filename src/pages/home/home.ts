import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  counter : number = 0 ;
  message: string = "" ;
  constructor(public navCtrl: NavController ,private toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  increment() {
      this.counter++;
      this.message = "";
      console.log(this.counter + this.message);

  }

  decrement() {
    if (this.counter > 0){
      this.counter--;
      this.message = "";
    } else {
      this.message = "Number can not be less than 0" ;
      //console.log(this.message);
      this.presentToast() ;
      this.reset;
    }
    console.log(this.counter);
  }

  reset() {
    this.presentConfirm() ;
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Number can not be less than 0',
      duration: 3000,
      position: 'top',
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  resetClick() {
    this.counter=0;
    this.message = "" ;
    console.log("Reset \n Number = " + this.counter);
  }


  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm ',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('confirm');
            this.resetClick() ;
          }
        }
      ]
    });
    alert.present();
  }
  
  

}


