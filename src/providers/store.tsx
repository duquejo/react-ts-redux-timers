import { legacy_createStore as createStore } from 'redux';
import type { Store } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { update } from '../actions';
import {
	loadState,
	saveState,
} from '../utils';
import rootReducer from '../reducers';
import { NewTimer } from '../components/NewTimer';
import { ListTimers } from '../components/ListTimers';
import { CONSTANTS_KEYS, CONSTANTS_VALUES } from '../types/constants';

const store: Store = createStore(
	rootReducer,
	loadState(),
	devToolsEnhancer({})
);

store.subscribe(
	throttle(() => {
		saveState(store.getState());
	}, CONSTANTS_VALUES[CONSTANTS_KEYS.STATE_THROTTLE])
);

export const ReduxProvider = (): JSX.Element => {
	let lastUpdateTime = Date.now();
	setInterval(() => {
		const now = Date.now();
		const deltaTime = now - lastUpdateTime;
		lastUpdateTime = now;
		store.dispatch(update(deltaTime));
	}, CONSTANTS_VALUES[CONSTANTS_KEYS.STATE_INTERVAL]);

	return (
		<Provider store={store}>
			<NewTimer />
			<ListTimers />
		</Provider>
	);
};
