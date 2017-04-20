import coursesHtml from './courses.html';

class CoursesCtrl {
	constructor(CoursesStore) {
		this.CoursesStore = CoursesStore;
	}

	$onInit() {
		this.CoursesStore.listCourses().then(courses => this.courses = courses);
	}
}

export const coursesComponent = {
	controller: CoursesCtrl,
	template: coursesHtml
};
