import { combineReducers } from 'redux';

import timerReducer from './timerReducer';
import selectedTimerReducer from './selectTimer';

const rootReducer = combineReducers({
	timers: timerReducer, // Array
	selectedTimer: selectedTimerReducer, // number
});

export default rootReducer;
