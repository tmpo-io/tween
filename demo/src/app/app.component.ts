import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';


import { TmpoTween } from '../tween/tween';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  num = 1000;
  num2 = -5000;

  tween$: Observable<any>;

  title = 'Observable property tween';

  constructor(public tween: TmpoTween) { }

  ngOnInit() {

    this.tween$ = this.tween
      .to(this, 10000, { num: -1000, num2: 5000 });

    this.tween$
      .do(x => Object.assign(this, x))
      .subscribe();

  }

  restart() {
    this.tween
    .to(this, 10000, { num: -1000, num2: 5000 })
    .do(x => Object.assign(this, x))
        .subscribe();
  }

  stop() {
    this.tween.stopAll();
  }


}
