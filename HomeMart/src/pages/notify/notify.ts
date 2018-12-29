import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the NotifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html',
})
export class NotifyPage {
  public listOfItems: any;
  // public lowItems = [];
  // viewA:any;
  // viewB:any;
  // viewC:any;
  // viewD:any;
  // viewE:any;

  // viewAdata:any;
  // viewBdata:any;
  // viewCdata:any;
  // viewDdata:any;
  // viewEdata:any;

  // viewF:any;
  // viewG:any;
  // viewH:any;
  // viewI:any;
  // viewJ:any;

  arr=[];

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {

    this.displayLowItems();
 //========all the firebase data here==========
    
 
//  this.listOfItems = this.navParams.data;
 
 
 //console.log(this.listOfItems);
 
 
//  this.viewAdata =this.listOfItems[0];
//   this.viewBdata=this.listOfItems[1];
//   this.viewCdata=this.listOfItems[2];
//   this.viewDdata=this.listOfItems[3];
//   this.viewEdata=this.listOfItems[4];

//   //=================name of sensor here========
//   this.storage.get('sensor1').then( res => {
//       this.viewA = res;
//     });
//   this.storage.get('sensor2').then( res => {
//       this.viewB = res;
//     });
//   this.storage.get('sensor3').then( res => {
//       this.viewC = res;
//     });
//   this.storage.get('sensor4').then( res => {
//       this.viewD = res;
//     });
//   this.storage.get('sensor5').then( res => {
//       this.viewE = res;
//     });
// //===================threshold value here======
//     this.storage.get('sensor01').then( res => {
//       this.viewF = res;
//     });
//     this.storage.get('sensor02').then( res => {
//       this.viewG = res;
//     });
//     this.storage.get('sensor03').then( res => {
//       this.viewH = res;
//     });
//     this.storage.get('sensor04').then( res => {
//       this.viewI = res;
//     });
//     this.storage.get('sensor05').then( res => {
//       this.viewJ = res;
//     });
    
    // setTimeout(() => {
    //   this.comparing(this.viewAdata,this.viewBdata,this.viewCdata,this.viewDdata,this.viewEdata);  
    // }, 200);
    
  }
  

//    comparing(A:any,B:any,C:any,D:any,E:any,){
// //=================name of sensor here========
//   this.storage.get('sensor1').then( res => {
//       this.viewA = res;
//     });
//   this.storage.get('sensor2').then( res => {
//       this.viewB = res;
//     });
//   this.storage.get('sensor3').then( res => {
//       this.viewC = res;
//     });
//   this.storage.get('sensor4').then( res => {
//       this.viewD = res;
//     });
//   this.storage.get('sensor5').then( res => {
//       this.viewE = res;
//     });
// //===================threshold value here======
//     this.storage.get('sensor01').then( res => {
//       this.viewF = res;
//     });
//     this.storage.get('sensor02').then( res => {
//       this.viewG = res;
//     });
//     this.storage.get('sensor03').then( res => {
//       this.viewH = res;
//     });
//     this.storage.get('sensor04').then( res => {
//       this.viewI = res;
//     });
//     this.storage.get('sensor05').then( res => {
//       this.viewJ = res;
//     });
   
//     setTimeout(() => {
//     if(A<this.viewF){
//       console.log(this.viewF, "view f ");
//       console.log(A, "view A");
//       this.lowItems.push(this.viewA);
//     }
//     if(B<this.viewG){
//       this.lowItems.push(this.viewB);
//     }
//     if(C<this.viewH){
//       this.lowItems.push(this.viewC);
//     }
//     if(D<this.viewI){
//       this.lowItems.push(this.viewD);
//     }
//     if(E<this.viewJ){
//       this.lowItems.push(this.viewE);
//     }
//     console.log(this.lowItems);
    
//      }, 500);
//   }

  displayLowItems(){
    setTimeout(() => {
    this.storage.get("lowItem1").then(res => {
      if (res) {
        this.arr.push(res);
      }
    });
    this.storage.get("lowItem2").then(res => {
      if (res) {
        this.arr.push(res);
      }
    });
    this.storage.get("lowItem3").then(res => {
      if (res) {
        this.arr.push(res);
      }
    });
    this.storage.get("lowItem4").then(res => {
      if (res) {
        this.arr.push(res);
      }
    });
    this.storage.get("lowItem5").then(res => {
      if (res) {
        this.arr.push(res);
      }
    });

  console.log(this.arr);
}, 300);
  }

  

}

