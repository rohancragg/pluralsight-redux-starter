import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

//these are integration tests
describe('Store', function() {
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
    const course = {
      id: 1,
      title: "Clean Code"
    };
    const course2 = {
      id: 2,
      title: "Second Course"
    };
    const initialCourses = [course, course2];

    const course1Updated = Object.assign({}, course, {title: course.title + " (updated)"});
     
    const state = Object.assign(initialState, {courses: initialCourses});
    const store = createStore(rootReducer, state);
    
    // act
    const updateCourseAction = courseActions.updateCourseSuccess(course1Updated)
    store.dispatch(updateCourseAction)

    // assert
    expect(store.getState().courses.length).toEqual(2) // there should be two items
    const actualUpdated = store.getState().courses.filter(course => course.id == 1)[0]; 
    expect(actualUpdated).toEqual(course1Updated); // item 1 should have changed
  })
});
