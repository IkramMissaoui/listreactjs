import React, { Component } from 'react';
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';
class App extends Component {
	state = {
		courses: [
			{ name: 'HTML' },
			{ name: 'CSS' },
			{ name: 'JQUERY' },
			{ name: 'php' },
			{ name: 'MySql' },
			{ name: 'Bootstrap' }
		],
		current: ''
	};
	//Update Course
	updatecourse = (e) => {
		this.setState({
			current: e.target.value
		});
	};
	//Add Course
	addCourse = (e) => {
		e.preventDefault();
		let current = this.state.current;
		let courses = this.state.courses;
		if (current === '') {
			return false;
		} else {
			courses.push({ name: current });
			this.setState({
				courses,
				current: ''
			});
		}
	};
	//delete course
	deleteCourse = (index) => {
		let courses = this.state.courses;
		courses.splice(index, 1);
		this.setState({
			courses
		});
	};
	//editCourse
	editCourse = (index, value) => {
		let courses = this.state.courses;
		let course = courses[index];
		course.name = value;
	};
	render() {
		const courses = this.state.courses,
			length = courses.length;
		const courseList = length ? (
			courses.map((course, index) => {
				return (
					<CourseList
						details={course}
						key={index}
						index={index}
						deleteCourse={this.deleteCourse}
						editCourse={this.editCourse}
					/>
				);
			})
		) : (
			<p>There is no courses to show</p>
		);

		return (
			<section className="App">
				<h2>Add courses</h2>
				<CourseForm current={this.state.current} updatecourse={this.updatecourse} addCourse={this.addCourse} />
				<ul>{courseList}</ul>
			</section>
		);
	}
}

export default App;
