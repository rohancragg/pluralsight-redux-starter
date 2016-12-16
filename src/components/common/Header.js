import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

class Header extends React.Component {
  render() {
    return (
        <ul className="nav nav-pills" role="tablist">
          <li role="presentation">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li role="presentation" className="active">
            <Link to="/courses" activeClassName="active">Courses <span className="badge">{this.props.coursesCount}</span></Link>
          </li>
          <li role="presentation" className="active">
            <Link to="/authors" activeClassName="active">Authors <span className="badge">{this.props.authorsCount}</span></Link>
          </li>
          <li role="presentation">
            <Link to="/about" activeClassName="active">About</Link>
          </li>
          <li role="presentation">
            <Link to="#">
              {this.props.loading &&  "Loading"}
              {this.props.loading && <LoadingDots interval={100} dots={20}/>}
            </Link>
          </li>
        </ul>
    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  coursesCount: PropTypes.number.isRequired,
  authorsCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    coursesCount: state.courses.length,
    authorsCount: state.authors.length
  };
}

export default connect(mapStateToProps)(Header);
