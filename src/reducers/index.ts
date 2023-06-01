import { combineReducers } from 'redux';

import timerReducer from './timerReducer';
import selectedTimerReducer from './selectTimer';

export default combineReducers({
	timers: timerReducer, // Array
	selectedTimer: selectedTimerReducer, // number
});
