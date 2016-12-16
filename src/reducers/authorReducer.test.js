import expect from 'expect';
import authorReducer from './authorReducer';
import * as actions from '../actions/authorActions';

describe('Author Reducer', () => {
  it('should add author when passed CREATE_AUTHOR_SUCCESS', () => {
    // arrange
    const initialState = [
      {firstName: 'A'},
      {firstName: 'C'}
    ];

    const newAuthor = {firstName: 'B'};

    const action = actions.createAuthorSuccess(newAuthor);

    //act
    const newState = authorReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].firstName).toEqual('A');
    expect(newState[1].firstName).toEqual('C');
    expect(newState[2].firstName).toEqual('B');
  });

  it('should update author when passed UPDATE_AUTHOR_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', firstName: 'A'},
      {id: 'B', firstName: 'B'},
      {id: 'C', firstName: 'C'}
    ];

    const author = {id: 'B', firstName: 'New Title'};
    const action = actions.updateAuthorSuccess(author);

    // act
    const newState = authorReducer(initialState, action);
    const updatedAuthor = newState.find(a => a.id == author.id);
    const untouchedAuthor = newState.find(a => a.id == 'A');

    // assert
    expect(updatedAuthor.firstName).toEqual('New Title');
    expect(untouchedAuthor.firstName).toEqual('A');
    expect(newState.length).toEqual(3);
  });

   it('should delete author when passed DELETE_AUTHOR_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', firstName: 'A'},
      {id: 'B', firstName: 'B'},
      {id: 'C', firstName: 'C'}
    ];

    const authorB = initialState[1];
    const action = actions.deleteAuthorSuccess(authorB);

    // act
    const newState = authorReducer(initialState, action);
    const deletedAuthor = newState.find(a => a.id == authorB.id);
    const untouchedAuthor = newState.find(a => a.id == 'A');

    // assert
    expect(newState.length).toEqual(2);
    expect(deletedAuthor).toNotExist;
    expect(untouchedAuthor.firstName).toEqual('A');
  });
});
