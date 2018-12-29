import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from "actions/types";

it('handles actions of type SAVE_COMMENT', () => {
	const newComment = 'new comment';
	const action = {
		type: SAVE_COMMENT,
		payload: newComment
	};

	const newState = commentsReducer([], action);
	expect(newState).toEqual([newComment]);
});

it('handles action with unknow type', () => {
	const newState = commentsReducer([], {});
	expect(newState).toEqual([]);
});