/**
*
*  @summary : Test script for application action creators
*
*/

import { expect } from '../testHelper';
import { SAVE_COMMENT } from '../../src/actions/types'
import { saveComment } from '../../src/actions';

describe('@ Actions', ()=> {

	describe('Saving comments', ()=> {

		it('has the correct type', ()=> {
			const action = saveComment();
			expect(action.type).to.equal(SAVE_COMMENT);
		})

		it('has the correct payload', ()=> {
			const action = saveComment('test comment');
			expect(action.payload).to.equal('test comment');
		})

	});


});
