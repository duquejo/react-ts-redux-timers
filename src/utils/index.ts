import type { Timer } from '../model/Timer';
import {
	CONSTANTS_KEYS,
	CONSTANTS_VALUES,
	CHARTJS_CONFIG,
} from '../types/constants';
import type { ChartData } from 'chart.js';

/**
 * The function formats a given time in milliseconds into a string in the format of
 * hours:minutes:seconds.milliseconds.
 * @param {number} time - The time parameter is a number representing a duration in milliseconds.
 * @returns The function `formatTime` returns a string in the format of
 * "hours:minutes:seconds.milliseconds" based on the input `time` value in milliseconds.
 */
export const formatTime = (time: number): string => {
	const ms =
		Math.round(time / CONSTANTS_VALUES.MS_VALUE) %
		CONSTANTS_VALUES.MS_ROUND;
	const secs =
		Math.floor(time / CONSTANTS_VALUES.MS_SECS) %
		CONSTANTS_VALUES.HOUR_ROUND;
	const mins =
		Math.floor(
			time / CONSTANTS_VALUES.MS_SECS / CONSTANTS_VALUES.MS_HOURS
		) % CONSTANTS_VALUES.HOUR_ROUND;
	const hours =
		Math.floor(
			time /
				CONSTANTS_VALUES.MS_SECS /
				CONSTANTS_VALUES.MS_MINS /
				CONSTANTS_VALUES.MS_HOURS
		) % CONSTANTS_VALUES.HOUR_ROUND;
	return `${hours}:${mins}:${secs}.${ms}`;
};

/**
 * This function loads and returns the state of timers from local storage if it exists, otherwise it
 * returns undefined.
 * @returns The `loadState` function returns an object if there is a serialized state in the local
 * storage, otherwise it returns `undefined`. If there is an
 * error while parsing the serialized state, it also returns `undefined`.
 */
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

/**
 * The function saves the state object to local storage as a serialized JSON string.
 * @param {any} state - The state parameter is of type "any", which means it can be any data type. In
 * this case, it is the state object that needs to be saved to the local storage.
 */
export const saveState = (state: any): void => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(CONSTANTS_KEYS.TIMERS_STATE, serializedState);
	} catch (error) {
		console.error('Error saving data');
	}
};

export const parseTimersToChartJs = (
	timers: Array<Timer>
): ChartData<'doughnut'> => {
	let chartJs: { labels: Array<string>; dataset: Array<number> } = {
		labels: [],
		dataset: [],
	};

	timers.forEach((timer: Timer) => {
		chartJs.labels!.push(timer.name);
		chartJs.dataset.push(timer.time);
	});

	return {
		labels: chartJs.labels,
		datasets: [
			{
				data: chartJs.dataset,
				...CHARTJS_CONFIG.chart,
			},
		],
	};
};
