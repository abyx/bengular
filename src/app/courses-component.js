import coursesHtml from './courses.html';

class CoursesCtrl {
	constructor(CoursesStore) {
		this.CoursesStore = CoursesStore;
	}

	$onInit() {
		this.CoursesStore.listCourses().then(courses => this.courses = courses);
	}

	onCourseSelect(courseId) {
		this.selectedCourseId = courseId;
	}
}

export const coursesComponent = {
	controller: CoursesCtrl,
	template: coursesHtml
};
