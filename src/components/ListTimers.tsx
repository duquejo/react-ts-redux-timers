import { useSelector } from 'react-redux';
import type { Timer } from '../model/Timer';
import { SingleTimerView } from './SingleTimerView';

export const ListTimers = () => {
	const timers = useSelector((state: any) => state.timers);
	return (
		<div className="timer-container">
			{timers.map((timer: Timer, i: number) => (
				<SingleTimerView key={`timer-${i}`} timer={timer} index={i} />
			))}
		</div>
	);
};
