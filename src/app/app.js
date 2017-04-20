import angular from 'angular';

import '../style/app.css';

import { coursesComponent } from './courses';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

export default angular.module('app', [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .component('courses', coursesComponent)
  .name;
