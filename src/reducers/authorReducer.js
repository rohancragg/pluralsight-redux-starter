import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    case types.CREATE_AUTHOR_SUCCESS:
      // add the given course to a new copy of the list of courses
      return [
        ...state,
        Object.assign({}, action.author)
      ];

    case types.UPDATE_AUTHOR_SUCCESS:
      // make a new copy of the list of courses, replacing the old version of the course with the new updated one
      return [
        ...state.filter(author => author.id !== action.author.id),
        Object.assign({}, action.author)
      ];

      case types.DELETE_AUTHOR_SUCCESS:
      // make a new copy of the list of courses, removing the deleted course
      return [
        ...state.filter(author => author.id !== action.author.id)
      ];

    default:
      return state;
  }
}
