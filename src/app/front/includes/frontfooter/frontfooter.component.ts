import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-frontfooter',
  templateUrl: './frontfooter.component.html',
  styleUrls: ['./frontfooter.component.scss']
})
export class FrontfooterComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
