import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [routerTransition()]
})
export class PostsComponent implements OnInit {

  p = 1;


  public isCollapsed = true;
  public isCollapsedi = true;

  postsRef: AngularFireList<any>;
  posts: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.postsRef = db.list('posts');
    // Use snapshotChanges().map() to store the key
    this.posts = this.postsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  addItem(
      title: string,
      tags: string,
      body: string,
      category: string
  ) {
    this.postsRef.push({
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
    this.postsRef.update(key, {
      title: title,
      tags: tags,
      body: body,
      category: category
    });
  }
  deleteItem(key: string) {
    this.postsRef.remove(key);
  }
  deleteEverything() {
    this.postsRef.remove();
  }

  ngOnInit() {

  }

}
