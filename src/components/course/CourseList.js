import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, deleting, onDelete}) => {
  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
      <CourseListRow key={course.id} course={course} deleting={deleting} onDelete={onDelete}/>
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleting: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseList;
