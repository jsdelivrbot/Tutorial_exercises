/**
*
*  @summary : Test script for app component
*
*/

import { renderComponent, expect } from '../testHelper';
import CommentsList from '../../src/components/commentsList';

describe('@ CommentsList', () => {

	let component;

	beforeEach(() => {
		const props = { comments: ['comment1','comment2'] }
		component = renderComponent(CommentsList, null, props);
	})

	it('shows an <li> for each component', () => {
		expect(component.find('li').length).to.equal(2);
	})

	it('shows each comment in the props', ()=> {
		expect(component).to.contain('comment1');
		expect(component).to.contain('comment2');
	})


});
