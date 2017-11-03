import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Items {
	description: string;
	itemid: number;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	itemsCollection: AngularFirestoreCollection<Items>; //Firestore collection
	items: Observable<Items[]>; // read collection

  constructor(public navCtrl: NavController, private afs: AngularFirestore) {

  }

  ionViewWillEnter() {
  	this.itemsCollection = this.afs.collection('items'); //ref()
  	this.items = this.itemsCollection.valueChanges()
  }



  addItem(){
  	this.itemsCollection.add({
      description: "1TB Space with great performance",
      itemid: 13423
    })
      .then( (result) => {
        console.log("Document added with id >>> ", result.id);
      })
      .catch( (error) => {
        console.error("Error adding document: ", error);
      });
  }

}
