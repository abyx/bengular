

import courseDetailsHtml from './course-details.html';

class CourseDetailsCtrl {
	constructor(CoursesStore) {
		this.CoursesStore = CoursesStore;
	}

	$onInit() {
		this._fetchCourse();
	}

	$onChanges(changes) {
		if (changes.courseId && !changes.courseId.isFirstChange()) {
			this._fetchCourse();
		}
	}

	_fetchCourse() {
		this.CoursesStore.getCourseById(this.courseId).then(course => this.course = course);
	}
}

export const courseDetailsComponent = {
	controller: CourseDetailsCtrl,
	template: courseDetailsHtml,
	bindings: {
		courseId: '<'
	}
};
