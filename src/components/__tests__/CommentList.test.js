import React from 'react';
import {mount} from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
let initialState;

beforeEach(() => {
	initialState = {
		comments: ['comment 1', 'comment 2']
	};

	wrapped = mount(
		<Root initialState={initialState}>
			<CommentList/>
		</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('creates one <li> per comment', () => {
	expect(wrapped.find('li').length).toEqual(initialState.comments.length);
});

it('shows the text fro each comment', () => {
	initialState.comments.forEach(comment => {
		expect(wrapped.render().text()).toContain(comment);
	})
});