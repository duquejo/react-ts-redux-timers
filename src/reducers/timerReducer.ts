import { NAMED_ACTIONS } from '../actions/timer.enum';
import { Timer } from '../model/Timer';

export interface IAction {
	type: NAMED_ACTIONS;
	payload: {
		index: number;
		name: string;
		deltaTime: number;
	};
}

const initialState: Array<Timer> = [];

export const timerReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		/**
		 * Add a new timer, return a copy of state.
		 */
		case NAMED_ACTIONS.NEW_TIMER:
			const name = action.payload.name
				? action.payload.name
				: `Timer ${state.length}`;
			return [...state, new Timer(name)];

		/**
		 * Invert the isRunning property of timer at index, return a copy of state.
		 */
		case NAMED_ACTIONS.TOGGLE_TIMER:
			const newState = state.map((timer: Timer, index: number) => {
				if (action.payload.index === index) {
					return {
						...timer,
						isRunning: !timer.isRunning,
					};
				}
				return timer;
			});
			return newState;

		/**
		 * Update deltaTime reducer
		 */
		case NAMED_ACTIONS.UPDATE:
			return state.map((timer: Timer) => {
				if (timer.isRunning) {
					timer = {
						...timer,
						time: (timer.time += action.payload.deltaTime),
					};
				}
				return timer;
			});

		/**
		 * Delete an existing timer by index
		 */
		case NAMED_ACTIONS.DELETE_TIMER:
			const indexToErase = action.payload.index;
			return state.filter((_, index: number) => {
				return index !== indexToErase;
			});

		default:
			return state;
	}
};
