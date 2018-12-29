import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let res;

beforeEach(() => {
	res = {
		status: 200,
		response: [
			{name: 'new comment 1'},
			{name: 'new comment 2'}
		]
	};

	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', res);
});

afterEach(() => {
	moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
	const wrapped = mount(
		<Root>
			<App/>
		</Root>
	);

	wrapped.find('.fetch-comments').simulate('click');

	moxios.wait(() => {
		wrapped.update();
		expect(wrapped.find('li').length).toEqual(2);

		done();
		wrapped.unmount();
	});
});