import React from 'react';

const CourseForm = (props) => {
	return (
		<form onSubmit={props.addCourse}>
			<input value={props.current} type="text" onChange={props.updatecourse} />
			<button type="submit">Add course</button>
		</form>
	);
};

export default CourseForm;
