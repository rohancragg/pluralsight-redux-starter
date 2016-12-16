import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class InfoPanel extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
    return (

      <footer className="footer">
        <div className="container">
          <ul className="nav nav-pills" role="tablist">
            <li role="presentation" className="active">
                <Link to="courses" className="btn btn-primary">Courses:
                  <span className="badge">{this.props.coursesCount}</span>
                </Link>
            </li>
            <li role="presentation" className="active">
              <Link to="authors" className="btn btn-success">Authors:
                <span className="badge">{this.props.authorsCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

InfoPanel.propTypes = {
  coursesCount: PropTypes.number.isRequired,
  authorsCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    coursesCount: state.courses.length,
    authorsCount: state.authors.length
  };
}

export default connect(mapStateToProps)(InfoPanel);
