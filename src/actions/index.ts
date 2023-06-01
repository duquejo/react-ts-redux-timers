import { NAMED_ACTIONS } from './timer.enum';

interface IAction {
	type: NAMED_ACTIONS;
	payload: any;
}

const addTimer = (name: string): IAction => ({
	type: NAMED_ACTIONS.NEW_TIMER,
	payload: { name },
});

const toggleTimer = (index: number): IAction => ({
	type: NAMED_ACTIONS.TOGGLE_TIMER,
	payload: { index },
});

const selectTimer = (index: number): IAction => ({
	type: NAMED_ACTIONS.SELECT_TIMER,
	payload: { index },
});

const deleteTimer = (index: number): IAction => ({
	type: NAMED_ACTIONS.DELETE_TIMER,
	payload: { index },
});

const update = (deltaTime: number): IAction => ({
	type: NAMED_ACTIONS.UPDATE,
	payload: { deltaTime },
});

export { addTimer, toggleTimer, selectTimer, update, deleteTimer };
