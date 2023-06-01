export enum CONSTANTS_KEYS {
	TIMERS_STATE = 'TIMERS_STATE',
	STATE_THROTTLE = 'STATE_THROTTLE',
	STATE_INTERVAL = 'STATE_INTERVAL',
}

export const CONSTANTS_VALUES = {
	[CONSTANTS_KEYS.STATE_THROTTLE]: 1000,
	[CONSTANTS_KEYS.STATE_INTERVAL]: 50,
};

export const formatTime = (time: number): string => {
	const ms = Math.round(time / 100) % 10;
	const secs = Math.floor(time / 1000) % 60;
	const mins = Math.floor(time / 1000 / 60) % 60;
	const hours = Math.floor(time / 1000 / 1000 / 60) % 60;
	return `${hours}:${mins}:${secs}.${ms}`;
};

export const loadState = (): Object | undefined => {
	try {
		let serializedState = localStorage.getItem(CONSTANTS_KEYS.TIMERS_STATE);
		return serializedState === null
			? undefined
			: JSON.parse(serializedState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (state: any): void => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(CONSTANTS_KEYS.TIMERS_STATE, serializedState);
	} catch (error) {
		console.error('Error saving data');
	}
};
