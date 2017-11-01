import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  animations: [routerTransition()]
})
export class CountriesComponent implements OnInit {

  p = 1;


  countriesRef: AngularFireList<any>;
  countries: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.countriesRef = db.list('countries');
    // Use snapshotChanges().map() to store the key
    this.countries = this.countriesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  addItem(
      title: string,
      tags: string,
      body: string,
      category: string
  ) {
    this.countriesRef.push({
      title: title,
      tags: tags,
      body: body,
      category: category
    });
  }
  updateItem(
      key: string,
      title: string,
      tags: string,
      body: string,
      category: string
  ) {
    this.countriesRef.update(key, {
      title: title,
      tags: tags,
      body: body,
      category: category
    });
  }
  deleteItem(key: string) {
    this.countriesRef.remove(key);
  }
  deleteEverything() {
    this.countriesRef.remove();
  }

  ngOnInit() {

  }

}
