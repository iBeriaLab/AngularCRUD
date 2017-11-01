import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontlayout',
  templateUrl: './frontlayout.component.html',
  styleUrls: ['./frontlayout.component.scss']
})
export class FrontLayoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/home']);
    }
  }

}
