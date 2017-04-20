import CoursePropsHtml from './course-props.html';

class CoursePropsCtrl {
	constructor() {

	}
}


export const coursePropsComponent = {
	controller: CoursePropsCtrl,
	template: CoursePropsHtml,
	bindings: {
		course: '<'
	}
};