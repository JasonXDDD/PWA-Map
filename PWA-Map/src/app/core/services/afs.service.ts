import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AfsService {
  userCollection: AngularFirestoreCollection
  dietCollection: AngularFirestoreCollection
  mealCollection: AngularFirestoreCollection
  diets: Observable<any[]>
  users: Observable<any[]>
  meals: Observable<any[]>

  constructor (private db: AngularFirestore) {
    this.dietCollection = db.collection('diet', ref =>
      ref.orderBy('time', 'desc')
    )
    this.userCollection = db.collection('user', ref =>
      ref.orderBy('time', 'desc')
    )
    this.mealCollection = db.collection('meal', ref =>
      ref.orderBy('time', 'desc')
    )
    this.diets = this.dietCollection.valueChanges()
    this.users = this.userCollection.valueChanges()
    this.meals = this.mealCollection.valueChanges()
  }

  async doAddItem (data) {
    await this.dietCollection.add(data)
    return true
  }

  async doAddMeal (data) {
    await this.mealCollection.add(data)
    return true
  }

  async doAddUser (data) {
    await this.userCollection.add(data)
    return true
  }

  async doGetTourList () {
    const collection = await this.db.collection('tour')

    return collection.valueChanges()
  }

  async doGetSchedule (tourId) {
    const collection = await this.db
      .collection('tour')
      .doc(tourId)
      .collection('schedule')

    return collection.valueChanges()
  }
}
