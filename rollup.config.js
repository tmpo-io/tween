export default {
  entry: './release/index.js',
  dest: './release/bundles/tween.umd.js',
  format: 'umd',
  moduleName: 'tmpo.tween',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/scheduler/animationFrame': 'Rx.Scheduler',
    'rxjs/observable/interval': 'Rx.Observable.prototype',
    'rxjs/operator/take': 'Rx.Observable.prototype',
    'rxjs/operator/takeUntil': 'Rx.Observable.prototype',
    'rxjs/operator/map': 'Rx.Observable'
  }
};
