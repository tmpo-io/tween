## tmpo-tween

WIP

A simple service for creating reactive tweens for angular2, with a api like tweenlite...

You *mostly will not need it and you must work with animation framework* on Angular based on webanimations. But sure, when you hit with a corner case where
you need to manually do a tween of something, you can use it.

Our use case is working with pixi.js

## Motivation

- Because we found that rxjs is powerful
- Because we don't want another dependency mostly wrote on js inside our project.
- Because we want to have tweens like observables, and get crazy with them.

## Example

1. Inject TmpoTweenService
2. TmpoTweenService.to(element, duration, properties)


Example:

```javascript
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

  p: Nums = { num: -500, num2: 5000 };

  tween$: Observable<Nums>;

  title = 'Observable property tween';

  constructor(public tween: TmpoTweenService) { }

  ngOnInit() {

    this.tween
      .to(this, 3000, this.p)
      .do(x => Object.assign(this, x))
      .subscribe();

  }

  restart() {
    this.tween$ =
      this.tween
        .to(this, 10000, this.p);

    this.tween$.do(x => Object.assign(this, x))
        .subscribe();
  }

  stop() {
    this.tween.stopAll();
  }


}
```

Check a demo here
http://embed.plnkr.co/1GE1GI/


Inspiration from:
https://github.com/staltz/rxtween

