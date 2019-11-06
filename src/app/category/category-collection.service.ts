import { Injectable } from '@angular/core';
import {FirebaseParent} from '../services/firebase-parent';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryCollectionService extends FirebaseParent {

  constructor(public db: AngularFirestore) {
    super('category', db);
  }
}
