import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';
import * as authorActions from '../actions/authorActions';

//these are integration tests
describe('Store', function() {
  describe('Courses', function() {
    // test that action creators, store, and reducers work together to create a course
    it('Should handle creating courses', function() {
      // arrange
      const store = createStore(rootReducer, initialState);
      const course = {
        title: "Clean Code"
      };

      // act
      const action = courseActions.createCourseSuccess(course);
      store.dispatch(action);

      // the action should have been passed to the courseReducer

      // assert
      const actual = store.getState().courses[0];
      const expected = {
        title: "Clean Code"
      };

      expect(actual).toEqual(expected);
    });

    it('Should handle updating a course', function() {
      //arrange
      const setupData = setupStoreWithCourses();

      const course1 = setupData.courses[0];
      const course1Updated = Object.assign({}, course1, {title: course1.title + " (updated)"});

      const state = Object.assign(initialState, {courses: setupData.courses});
      const store = createStore(rootReducer, state);

      // act
      const updateCourseAction = courseActions.updateCourseSuccess(course1Updated);
      store.dispatch(updateCourseAction);

      // assert
      expect(store.getState().courses.length).toEqual(2); // there should be two items
      const actualUpdated = store.getState().courses.filter(course => course.id == 1)[0];
      expect(actualUpdated).toEqual(course1Updated); // item 1 should have changed
    });

    it('Should handle deleting a course', function() {
      //arrange
      const setupData = setupStoreWithCourses();

      const course1 = setupData.courses[0];

      const state = Object.assign(initialState, {courses: setupData.courses});
      const store = createStore(rootReducer, state);

      // act
      const deleteCourseAction = courseActions.deleteCourseSuccess(course1);
      store.dispatch(deleteCourseAction);

      // assert
      expect(store.getState().courses.length).toEqual(1); // there should be only one item remaining
    });

    function setupStoreWithCourses()
    {
          const course = {
        id: 1,
        title: "Clean Code"
      };
      const course2 = {
        id: 2,
        title: "Second Course"
      };
      const initialCourses = [course, course2];

      const state = Object.assign(initialState, {courses: initialCourses});
      const store = createStore(rootReducer, state);

      return {
        store: store,
        courses: initialCourses
      };
    }
  });

  describe('Authors', function() {
    // test that action creators, store, and reducers work together to create a author
    it('Should handle creating authors', function() {
      // arrange
      const store = createStore(rootReducer, initialState);
      const author = {
        firstName: "Cory House"
      };

      // act
      const action = authorActions.createAuthorSuccess(author);
      store.dispatch(action);

      // the action should have been passed to the authorReducer

      // assert
      const actual = store.getState().authors[0];
      const expected = {
        firstName: "Cory House"
      };

      expect(actual).toEqual(expected);
    });

    it('Should handle updating a author', function() {
      //arrange
      const setupData = setupStoreWithAuthors();

      const author1 = setupData.authors[0];
      const author1Updated = Object.assign({}, author1, {title: author1.title + " (updated)"});

      const state = Object.assign(initialState, {authors: setupData.authors});
      const store = createStore(rootReducer, state);

      // act
      const updateAuthorAction = authorActions.updateAuthorSuccess(author1Updated);
      store.dispatch(updateAuthorAction);

      // assert
      expect(store.getState().authors.length).toEqual(2); // there should be two items
      const actualUpdated = store.getState().authors.filter(author => author.id == 1)[0];
      expect(actualUpdated).toEqual(author1Updated); // item 1 should have changed
    });

    it('Should handle deleting a author', function() {
      //arrange
      const setupData = setupStoreWithAuthors();

      const author1 = setupData.authors[0];

      const state = Object.assign(initialState, {authors: setupData.authors});
      const store = createStore(rootReducer, state);

      // act
      const deleteAuthorAction = authorActions.deleteAuthorSuccess(author1);
      store.dispatch(deleteAuthorAction);

      // assert
      expect(store.getState().authors.length).toEqual(1); // there should be only one item remaining
    });

    function setupStoreWithAuthors()
    {
      const author = {
        id: 1,
        title: "Cory House"
      };
      const author2 = {
        id: 2,
        title: "Scott Allen"
      };
      const initialAuthors = [author, author2];

      const state = Object.assign(initialState, {authors: initialAuthors});
      const store = createStore(rootReducer, state);

      return {
        store: store,
        authors: initialAuthors
      };
    }
  });
});
