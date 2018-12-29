import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NotifyPage } from '../notify/notify';
//import { TitleCasePipe } from '@angular/common';

//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [];
  firebaseData:any;

  public shoppingList:any;
  public notifyItems:any;
  

  sensor1:any;
  sensor2:any;
  sensor3:any;
  sensor4:any;
  sensor5:any;
  // add here

  nameType1:any;
  nameType2:any;
  nameType3:any;
  nameType4:any;
  nameType5:any;

  threshold1:any;
  threshold2:any;
  threshold3:any;
  threshold4:any;
  threshold5:any;

  storedThreshold1:any;
  storedThreshold2:any;
  storedThreshold3:any;
  storedThreshold4:any;
  storedThreshold5:any;

  
  //add jere

  showRedButtonAtTop = false;

  selected:any;


  constructor(public navCtrl: NavController,public afd : AngularFireDatabase, private storage: Storage, private alertCtrl: AlertController) {
  this.getDataFromFireBase();
  this.getSavedNames();
  }
  getDataFromFireBase() {
    // get request
     this.afd.object('/Items/').valueChanges().subscribe(res => {
      this.firebaseData = res; //all the object from firebase to firebase data which makes it also a object (any) declared
      //console.log( this.firebaseData);
      this.items.push(this.firebaseData); // items is a list so keeping firebase object into the list,we are logging to see if the position in list wjich is 0 position
      this.sensor1 = this.items[0].Sensor1; // taking out Sensor1 data from firebase=> 0position in list and inide Sensor1 obj=>  and passing to a new variable sensor1 which we declared earlier
      this.sensor2 = this.items[0].Sensor2;
      this.sensor3 = this.items[0].Sensor3;
      this.sensor4 = this.items[0].Sensor4;
      this.sensor5 = this.items[0].Sensor5;

      //  this.shoppingList = [
      //   this.sensor1,this.sensor2,this.sensor3,this.sensor4,this.sensor5
      // ];// sending data to notify page preparation
  
      
      this.shoppingCartUpdate(this.sensor1,this.sensor2,this.sensor3,this.sensor4,this.sensor5);  
      
      
      });
  }

  on(){
    var onOff = {
      "Light": "1"
    };
    this.afd.object('/Items/').update(onOff).then(res => {
      console.log(res);
    });
  }

  off(){
    var onOff = {
      "Light": "0"
    };
   this.afd.object('/Items/').update(onOff).then(res => {
     console.log(res);
   });
  }


  // normalApi(){
  //   this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe( res => {
  //     this.test = res;
  //     console.log(res);
  //   });
  // }

  prompt(x:any) {
    let alert = this.alertCtrl.create({
      title: 'Update Groceries!',
      inputs: [{
        name: 'Title',
        placeholder: 'Please enter item name'
      }],
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.setName(data.Title, x); //calling setName method
            console.log('saved');
          }
        }
      ]
    });
    alert.present();

  }


  setName(name:any, x){
    // if(x == "sensor1"){
    //   this.storage.set("sen1",name).then(res => {
    //     this.storage.get("sen1").then( (res) => {
    //       this.nameType1 = res;
    //       console.log(this.nameType1);
    //     });
    //  });
    // } 
    // else if( x == "sensor2"){
    //   this.storage.set("sen2",name).then(res => {
    //     this.storage.get("sen2").then( (res) => {
    //       this.nameType2 = res;
    //       console.log(this.nameType2);
    //     });
    //  });
    // }
  
      this.storage.set(x, name).then(() => {
        this.storage.get(x).then( res => {
          if(x == 'sensor1'){
            this.nameType1 = res;
          }
          else if(x == 'sensor2'){
            this.nameType2 = res;
          }
          else if(x== 'sensor3'){
            this.nameType3 =res;
          }
          else if(x== 'sensor4'){
            this.nameType4 = res;
          }
          else if(x== 'sensor5'){
            this.nameType5 = res;
          }
          //add if else here based on the name passed from the view

        });
     });
    
      
  }

  getSavedNames(){
    this.storage.get("sensor1").then( (res) => {
      if(res){
        this.nameType1 = res;
      }else{
        this.nameType1 = "Default1";
      }
    });

    this.storage.get("sensor2").then( (res) => {
      if(res){
        this.nameType2 = res;
      }else{
        this.nameType2 = "Default2";
      }
    });

    this.storage.get("sensor3").then( (res) => {
      if(res){
        this.nameType3 = res;
      }else{
        this.nameType3 = "Default3";
      }
    });

    this.storage.get("sensor4").then( (res) => {
      if(res){
        this.nameType4 = res;
      }else{
        this.nameType4 = "Default4";
      }
    });

    this.storage.get("sensor5").then( (res) => {
      if(res){
        this.nameType5 = res;
      }else{
        this.nameType5 = "Default5";
      }
    });

    // add whole block 
    /*
      change get("keyvalue")
    */

    // this.storage.get("sensor2").then( (res) => {
    //   if(res){
    //     this.nameType2 = res;
    //   }else{
    //     this.nameType2 = "Default2";
    //   }
    // }); 
    
  }
//====================get updated threshold values and compare => with sensor value and change notification icon
  shoppingCartUpdate(a:any,b:any,c:any,d:any,e:any){

    this.storage.get('sensor01').then(res =>{
      this.storedThreshold1=res;
    });
    this.storage.get('sensor02').then(res =>{
      this.storedThreshold2= res;
    });
    this.storage.get('sensor03').then( res =>{
      this.storedThreshold3 =res;
    });
    this.storage.get('sensor04').then(res =>{
      this.storedThreshold4= res;
    });
    this.storage.get('sensor05').then( res =>{
      this.storedThreshold5 =res;
    });
//=====================comparing list============
    // this.comparableData =[
    //   this.storedThreshold1,this.storedThreshold2,this.storedThreshold3,this.storedThreshold4,this.storedThreshold5
    // ];
    // console.log(this.comparableData);
 //=====================   
   setTimeout(() => {
      // if (a < this.storedThreshold1 || b < this.storedThreshold2 || c < this.storedThreshold3 || d < this.storedThreshold4 || e < this.storedThreshold5 ){
      // this.showRedButtonAtTop = true;
      // }


      if (a < this.storedThreshold1){
        this.showRedButtonAtTop = true;
        this.storage.set("lowItem1",this.nameType1);

      } else{
        this.storage.remove("lowItem1");
      } 
      
      if(b < this.storedThreshold2) {
        this.showRedButtonAtTop = true;
        this.storage.set("lowItem2",this.nameType2);

      }else{
        this.storage.remove("lowItem2");
      } 

      if (c < this.storedThreshold3){
        this.showRedButtonAtTop = true;
        this.storage.set("lowItem3",this.nameType3);

      }else{
        this.storage.remove("lowItem3");
      } 
      
      if(d < this.storedThreshold4){
        this.showRedButtonAtTop = true;
        this.storage.set("lowItem4",this.nameType4);

      } else{
        this.storage.remove("lowItem4");
      }

      if(e < this.storedThreshold5){
        this.showRedButtonAtTop = true;
        this.storage.set("lowItem5",this.nameType5);
      }else{
        this.storage.remove("lowItem5");
      }
      
    }, 1000);

    
    
    
    
  }
  //================update threshold======
  
  promptThreshold(y: any) {
    const prompt = this.alertCtrl.create({
      title: 'Update Threshold',
      message: "Set the threshold level",
      inputs: [
        {
          name: 'thresholdNum',
          placeholder: 'Enter Number',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.setThreshold(data.thresholdNum,y);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  setThreshold(num:any, y){
      this.storage.set(y, num).then(() => {
        this.storage.get(y).then( res => {
          if(y == 'sensor01'){
            this.threshold1 = res;
            console.log(this.threshold1);  
            this.showRedButtonAtTop = false;
            this.shoppingCartUpdate(this.sensor1,this.sensor2,this.sensor3,this.sensor4,this.sensor5);  
          }
          else if(y == 'sensor02'){
            this.threshold2 = res;
            console.log(this.threshold2);
            this.showRedButtonAtTop = false;
            this.shoppingCartUpdate(this.sensor1,this.sensor2,this.sensor3,this.sensor4,this.sensor5);  
          
          }
          else if(y == 'sensor03'){
            this.threshold3 =res;
            this.showRedButtonAtTop = false;
            this.shoppingCartUpdate(this.sensor1,this.sensor2,this.sensor3,this.sensor4,this.sensor5);  
          
          }
          else if(y == 'sensor04'){
            this.threshold4 = res;
            this.showRedButtonAtTop = false;
            this.shoppingCartUpdate(this.sensor1,this.sensor2,this.sensor3,this.sensor4,this.sensor5);  
          
          }
          else if(y == 'sensor05'){
            this.threshold5 = res;
            this.showRedButtonAtTop = false;
           this.shoppingCartUpdate(this.sensor1,this.sensor2,this.sensor3,this.sensor4,this.sensor5);  
          
          }
          //add if else here based on the name passed from the view

        });
     });
    
  }

 // ============= navigate to notify page
  updateGroceries(){
    this.navCtrl.push(NotifyPage,this.shoppingList)
    }

    print(x:any){
      console.log(this.selected);
      console.log(x)
    }

}

