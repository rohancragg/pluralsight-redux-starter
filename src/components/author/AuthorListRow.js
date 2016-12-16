import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author, deleting, onDelete}) => {
  return (
    <tr>
      <td><Link to={'/author/' + author.id}>Edit: {author.id}</Link></td>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
      <td>{author.courseCount}</td>
      <td><input
        type="submit"
        disabled={deleting || (author.courseCount > 0)}
        value={deleting ? 'Deleting...' : 'Delete'}
        className="btn btn-primary"
        onClick={function() {onDelete(author);}}/></td>
    </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired,
  deleting: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AuthorListRow;
