import {
	IAction,
	NAMED_ACTIONS,
	SelectTimerState,
} from '../types/actions.types';

const initialState: SelectTimerState = 0;

const selectedTimerReducer = (state = initialState, action: IAction) => {
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

export default selectedTimerReducer;
