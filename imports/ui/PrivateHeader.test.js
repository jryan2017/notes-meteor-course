import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { PrivateHeader } from './PrivateHeader';

if (Meteor.isClient) {
    describe('PrivateHeader', function () {
       it('should set button text to logout', function() {
          const wrapper = mount( <PrivateHeader title="Test title"/> ) 
          const buttonText = wrapper.find('button').text();
          
          expect(buttonText).toBe('Logout');
       });
       
       it('should use title prop as h1 text', function() {
            const title = 'Test title';
            const wrapper = mount( <PrivateHeader title={title}/> ) 
            const h1Text = wrapper.find('h1').text();
          
          expect(h1Text).toBe(title);
       });
       
    //   it('should call the function', function() {
    //         const spy = expect.createSpy();
    //         spy(3, 4, 123);
    //         spy('Andrew');
    //         expect(spy).toHaveBeenCalledWith('Andrew');
    //   });
       
    //   it('should call handleLogout on click', function() {
    //         const spy = expect.createSpy();
    //         const wrapper = mount( <PrivateHeader title="Title" handleLogout={spy}/> );
            
    //         wrapper.find('button').simulate('click');
            
    //         expect(spy).toHaveBeenCalled();
    //   });
    
    });
}