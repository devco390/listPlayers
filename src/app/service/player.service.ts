import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  constructor(private firestore: AngularFirestore) {}

  createPlayer(record) {
    return this.firestore.collection("Players").add(record);
  }

  readPlayers() {
    return this.firestore.collection("Players").snapshotChanges();
  }

  updatePlayer(recordID, record) {
    this.firestore.doc("Players/" + recordID).update(record);
  }

  deletePlayer(record_id) {
    this.firestore.doc("Players/" + record_id).delete();
  }
}
