import React from 'react';
import * as router from 'react-router';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {AuthorsPage} from './AuthorsPage';

describe ('Authors Page', () => {
  let browserHistorySpy;

  beforeEach(() => {
    router.browserHistory = { push: ()=>{} }; // eslint-disable-line import/namespace
    browserHistorySpy = expect.spyOn(router.browserHistory, 'push');
  });

  afterEach(() => {
    browserHistorySpy.restore();
    expect.restoreSpies();
  });

  it('SaveButton click will redirect to Author page', () => {
    const props = {
      authors: [{id: 0, firstName: '', lastName: ''}],
      actions: { deleteAuthor: () => { return Promise.resolve(); }
      }
    };
    const wrapper = mount(<AuthorsPage {...props}/>);

    const addButton = wrapper.find('input').first();
    expect(addButton.prop('type')).toBe('submit');
    addButton.simulate('click');

    expect(browserHistorySpy).toHaveBeenCalled();
    expect(browserHistorySpy.calls.length).toEqual(1);
    expect(browserHistorySpy.calls[0].context).toBe(router.browserHistory);
    expect(browserHistorySpy.calls[0].arguments).toEqual([ '/author' ]);
  });
});
