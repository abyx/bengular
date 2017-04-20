import coursesHtml from './courses.html';

class CoursesCtrl {
	constructor(CoursesStore) {
		this.CoursesStore = CoursesStore;
		this.api = {
			onDelete: courseId => {
				this._fetchCourses();
				if (courseId === this.selectedCourseId) {
					this.selectedCourseId = undefined;
				}
			}
		}
	}

	$onInit() {
		this._fetchCourses();
	}

	_fetchCourses() {
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
