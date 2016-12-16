import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors, deleting, onDelete}) => {
  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Firstname</th>
        <th>LastName</th>
        <th>Courses</th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
        {authors.map(author =>
          <AuthorListRow key={author.id} author={author} deleting={deleting} onDelete={onDelete}/>
        )}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  deleting: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AuthorList;
