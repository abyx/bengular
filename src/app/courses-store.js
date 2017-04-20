import angular from 'angular';

export class CoursesStore {

	constructor($q) {
		this.$q = $q;
		this.courses = [
			{
				id: 1,
				name: 'Course1',
				description: 'course 1 cool',
				blueprintId: '123'
			},
			{
				id: 2,
				name: 'Course2',
				description: 'course Noam',
				blueprintId: '34'
			},
			{
				id: 3,
				name: 'Course3',
				description: 'course Elad',
				blueprintId: '341'
			}

		];
	}

	listCourses() {
		return this.$q.when(
			angular.copy(this.courses)
		);
	}

	getCourseById(id) {
		const coursersFull = [
			{
				id: 1,
				name: 'Course1',
				description: 'course 1 cool',
				blueprintId: '123',
				creationTime: 'kdkd'
			},
			{
				id: 2,
				name: 'Course2',
				description: 'course Noam',
				blueprintId: '34',
				creationTime: 'kdddd'
			},
			{
				id: 3,
				name: 'Course3',
				description: 'course Elad',
				blueprintId: '341',
				creationTime: 'kdk090d9'
			}

		];

		return this.$q.when(angular.copy(coursersFull.find(course => course.id === id)));

	}

	deleteCourseById(id) {
		let index = this.courses.findIndex(course => course.id === id);
		this.courses.splice(index, 1);
		return this.$q.when({});
	}
}