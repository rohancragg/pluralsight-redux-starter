import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course, deleting, onDelete}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td><input
        type="submit"
        disabled={deleting}
        value={deleting ? 'Deleting...' : 'Delete'}
        className="btn btn-primary"
        onClick={function() {onDelete(course);}}/></td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  deleting: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseListRow;
