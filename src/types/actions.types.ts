import type { Timer } from '../model/Timer';

export enum NAMED_ACTIONS {
	NEW_TIMER = 'NEW_TIMER',
	TOGGLE_TIMER = 'TOGGLE_TIMER',
	SELECT_TIMER = 'SELECT_TIMER',
	DELETE_TIMER = 'DELETE_TIMER',
	RESET_TIMER = 'RESET_TIMER',
	UPDATE = 'UPDATE',
}

export interface IAction {
	type: NAMED_ACTIONS;
	payload?: any;
}

export type SelectTimerState = number;
export type TimerReducerState = Array<Timer>;
