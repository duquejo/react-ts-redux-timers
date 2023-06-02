import { NewTimer } from './NewTimer';
import { ListTimers } from './ListTimers';
import { Statistics } from './Statistics';

export const App = () => {
	return (
		<div className="flex flex-col justify-normal items-center gap-4 lg:flex-row lg:justify-center lg:items-center">
			<div className="order-2 lg:order-1">
				<NewTimer />
				<ListTimers />
			</div>
			<div className="order-1 lg:order-2">
				<Statistics />
			</div>
		</div>
	);
};
