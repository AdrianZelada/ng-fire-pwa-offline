import { Injectable } from '@angular/core';
import {FirebaseParent} from '../services/firebase-parent';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsCollectionService extends FirebaseParent {

  constructor(public db: AngularFirestore) {
    super('products', db);
  }
}
