export enum CONSTANTS_KEYS {
	TIMERS_STATE = 'TIMERS_STATE',
	STATE_THROTTLE = 'STATE_THROTTLE',
	STATE_INTERVAL = 'STATE_INTERVAL',
	MS_VALUE = 'MS_VALUE',
	MS_SECS = 'MS_SECS',
	MS_MINS = 'MS_MINS',
	MS_HOURS = 'MS_HOURS',
	MS_ROUND = 'MS_ROUND',
	HOUR_ROUND = 'HOUR_ROUND',
}

export const CONSTANTS_VALUES = {
	[CONSTANTS_KEYS.STATE_THROTTLE]: 1000,
	[CONSTANTS_KEYS.STATE_INTERVAL]: 50,
	[CONSTANTS_KEYS.MS_VALUE]: 100,
	[CONSTANTS_KEYS.MS_SECS]: 1000,
	[CONSTANTS_KEYS.MS_MINS]: 1000,
	[CONSTANTS_KEYS.MS_HOURS]: 60,
	[CONSTANTS_KEYS.MS_ROUND]: 10,
	[CONSTANTS_KEYS.HOUR_ROUND]: 60,
};

export const CHARTJS_CONFIG = {
	chart: {
		backgroundColor: [
			'rgba(255, 99, 132, 0.4)',
			'rgba(54, 162, 235, 0.4)',
			'rgba(255, 206, 86, 0.4)',
			'rgba(75, 192, 192, 0.4)',
			'rgba(153, 102, 255, 0.4)',
			'rgba(255, 159, 64, 0.4)',
		],
		borderColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
		],
		borderWidth: 1,
	},
	options: {
		plugins: {
			legend: {
				labels: {
					color: 'black',
				},
			},
		},
	},
};
