/**
*
*  @summary : Test script for app component
*
*/

import { renderComponent, expect } from '../testHelper';
import App from '../../src/components/app';

describe('@ App', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(App)
	})

	//Identify child component top level classname
	it('shows comment box class for component', () => {
		expect(component.find('.comments-box')).to.exist;
	})

	it('shows comment list class for component', ()=> {
		expect(component.find('.comments-list')).to.exist;
	})


});
