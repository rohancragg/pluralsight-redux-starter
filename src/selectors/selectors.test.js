import expect from 'expect';
import * as selectors from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen',firstName: 'Scott',lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect(selectors.authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });

  describe('authorsWithCourseCount', () => {
    it('should return author data with a courseCount', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen',firstName: 'Scott',lastName: 'Allen'}
      ];

      const courses = [
        {id: 1, title: 'A', authorId: 'cory-house'},
        {id: 2, title: 'B', authorId: 'cory-house'},
        {id: 3, title: 'C', authorId: 'cory-house'}
      ];

      const expected = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House', courseCount: 3},
        {id: 'scott-allen',firstName: 'Scott',lastName: 'Allen', courseCount: 0}
      ];

      expect(selectors.authorsWithCourseCount(authors, courses)).toEqual(expected);
    });
  });
});
