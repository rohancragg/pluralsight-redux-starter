import React from 'react';
import * as router from 'react-router';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {CoursesPage} from './CoursesPage';


describe ('Courses Page', () => {
  let browserHistorySpy;

  beforeEach(() => {
    router.browserHistory = { push: ()=>{} }; // eslint-disable-line import/namespace
    browserHistorySpy = expect.spyOn(router.browserHistory, 'push');
  });

  afterEach(() => {
    browserHistorySpy.restore();
    expect.restoreSpies();
  });

  it('SaveButton click will redirect to course page', () => {
    const props = {
      courses: [{id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}],
      actions: { deleteCourse: () => { return Promise.resolve(); }
      }
    };
    const wrapper = mount(<CoursesPage {...props}/>);

    const addButton = wrapper.find('input').first();
    expect(addButton.prop('type')).toBe('submit');
    addButton.simulate('click');

    expect(browserHistorySpy).toHaveBeenCalled();
    expect(browserHistorySpy.calls.length).toEqual(1);
    expect(browserHistorySpy.calls[0].context).toBe(router.browserHistory);
    expect(browserHistorySpy.calls[0].arguments).toEqual([ '/course' ]);
    
  });

  it('', () => {
    const props = {
      courses: [{id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}],
      actions: { deleteCourse: () => { return Promise.resolve(); }
      }
    };
    const wrapper = mount(<CoursesPage {...props}/>);

    
  });
});
