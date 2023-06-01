import { NAMED_ACTIONS } from '../actions/timer.enum';
import type { IAction } from './timerReducer';

const initialState: number = 0;

export const selectedTimerReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		/**
		 * On the SELECT_TIMER action, set the selectTimer to the value passed in the payload.
		 */
		case NAMED_ACTIONS.SELECT_TIMER:
			return (state = action.payload.index);

		default:
			return state;
	}
};
