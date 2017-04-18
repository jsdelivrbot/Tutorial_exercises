/**
*
*  @summary : Test script for comments component
*
*/

import { renderComponent, expect } from '../testHelper';
import CommentBox from '../../src/components/comments';

describe('Comments Box', ()=> {

	let component;

	//Assign rendered component to describe block scope for
	//use within whole function
	beforeEach(()=> {
		component = renderComponent(CommentBox);
	});

	it('has correct parent class', ()=> {
		expect(component).to.have.class('comments-box');
	})

	it('has a text area ', ()=> {
		expect(component.find('textarea')).to.exist;
	})

	it('has a button', ()=> {
		expect(component.find('button')).to.exist;
	})

	describe('textarea features', ()=> {

		//Simulate text area change event to test text
		//in text area and submit = clear.
		beforeEach(() => {
			component.find('textarea').simulate('change', 'text in comment box');
		})

		it('shows textarea displays text entered', ()=> {
			expect(component.find('textarea')).to.have.value('text in comment box');
		})

		it('clears textarea when submitted', ()=> {
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('')
		})

	})


})
