import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.page.html',
  styleUrls: ['./battle.page.scss'],
})
export class BattlePage implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('Warriors').valueChanges();
  }

  ngOnInit() {
  }

}
