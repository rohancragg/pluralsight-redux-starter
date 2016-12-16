import React from 'react';
import expect from 'expect';
import * as router from 'react-router';
import {mount, shallow} from 'enzyme';
import {ManageAuthorPage} from './ManageAuthorPage';

describe ('Manage Author Page', () => {
  let browserHistorySpy;

  beforeEach(() => {
    router.browserHistory = { push: ()=>{} }; // eslint-disable-line import/namespace
    browserHistorySpy = expect.spyOn(router.browserHistory, 'push');
  });

  afterEach(() => {
    browserHistorySpy.restore();
    expect.restoreSpies();
  });

  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: { saveAuthor: () => { return Promise.resolve(); }},
      author: {id: '', firstName: '', lastName: ''}
    };

    const wrapper = mount(<ManageAuthorPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.lastName).toBe('Last name must be at least 2 characters.');
    expect(wrapper.state().errors.firstName).toBe('First name must be at least 2 characters.');

  });
});
