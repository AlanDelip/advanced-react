import React from 'react';
import {storiesOf} from '@storybook/react';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

const stories = storiesOf('Comment Box', module);

stories.add('normal', () =>
	<Root>
		<CommentBox history={{push: () => console.log('require auth')}}/>
	</Root>
);