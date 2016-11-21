import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


import { TmpoTweenService } from 'tmpo-tween';

interface Nums {
  num: number;
  num2: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  num = 1000;
  num2 = -5000;

  p:Nums = { num: -1000, num2: 5000 };

  tween$: Observable<Nums>;

  title = 'Observable property tween';

  constructor(public tween: TmpoTweenService) { }

  ngOnInit() {

    this.tween$ = this.tween
      .to(this, 10000, this.p);

    this.tween$
      .do(x => Object.assign(this, x))
      .subscribe();

  }

  restart() {
    let p = { num: -1000, num2: 5000 } as Nums;
    this.tween$ =
      this.tween
        .to(this, 10000, p);

    this.tween$.do(x => Object.assign(this, x))
        .subscribe();
  }

  stop() {
    this.tween.stopAll();
  }


}
