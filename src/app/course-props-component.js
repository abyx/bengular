import CourseHtml from './course.html';

class CourseCtrl {
	constructor() {

	}
}


export const courseComponent = {
	controller: CourseCtrl,
	template: CourseHtml,
	bindings: {
		course: '<'
	}
};