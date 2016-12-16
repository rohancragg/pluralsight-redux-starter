import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import {authorsWithCourseCount} from '../../selectors/selectors';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

export class AuthorsPage extends React.Component {
 constructor(props) {
    super(props);

    //console.log("AuthorsPage.constructor() called");
    this.state = { deleting: false };

    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }

  deleteAuthor(author) {
    this.setState({deleting: true});

    this.props.actions.deleteAuthor(author).then(() => {
          toastr.success(`Author ${author.id} deleted!`);
          this.setState({deleting: false});
        })
      .catch(error => {
        toastr.error(error);
        this.setState({deleting: false});
      });
  }

  render() {
    const {authors} = this.props;

    return (
      <section>
        <div className="jumbotron">
          <h1>Authors</h1>
          <input type="submit"
                value="Add Author"
                className="btn btn-primary"
                onClick={this.redirectToAddAuthorPage}/>
        </div>
        <div>
          <AuthorList
            authors={authors}
            deleting={this.state.deleting}
            onDelete={this.deleteAuthor} />
        </div>
      </section>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authors: authorsWithCourseCount(state.authors, state.courses)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
