/// <reference path="../typings/angular2/angular2.d.ts" />
///<reference path="../typings/es6-promise/es6-promise.d.ts"/>
///<reference path="../typings/rx/rx.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyAppComponent {
  name: string;
  
  constructor() {
    this.name = 'Alice';
  }
}

bootstrap(MyAppComponent);