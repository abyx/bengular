import angular from 'angular';

import '../style/app.css';

import {coursesComponent} from './courses-component';
import {coursePropsComponent} from './course-props-component';
import {courseDetailsComponent} from './course-details-component';
import {CoursesStore} from './courses-store';

let app = () => {
	return {
		template: require('./app.html'),
		controller: 'AppCtrl',
		controllerAs: 'app'
	}
};

class AppCtrl {
	constructor() {
	}
}

export default angular.module('app', [])
	.directive('app', app)
	.controller('AppCtrl', AppCtrl)
	.component('courses', coursesComponent)
	.component('courseProps', coursePropsComponent)
	.component('courseDetails', courseDetailsComponent)
	.service('CoursesStore', CoursesStore)
	.name;
