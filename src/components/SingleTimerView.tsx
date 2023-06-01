import type { FC } from 'react';
import type { Timer } from '../model/Timer';
import { useDispatch } from 'react-redux';
import { deleteTimer, toggleTimer } from '../actions';
import { formatTime } from '../utils';

interface ITimerViewProps {
	index: number;
	timer: Timer;
}

export const SingleTimerView: FC<ITimerViewProps> = ({ index, timer }) => {
	const dispatch = useDispatch();
	const handleOnClickStatus = () => {
		dispatch(toggleTimer(index));
	};
	const handleOnClickDelete = () => {
		dispatch(deleteTimer(index));
	};
	return (
		<div className='timer-view'>
			<h2>{timer.name}</h2>
			<h1>{formatTime(timer.time)}</h1>
			<button
				className={timer.isRunning ? 'isStopped' : 'isRunning'}
				onClick={handleOnClickStatus}
			>
				{timer.isRunning ? 'Stop' : 'Start'}
			</button>
			<button className='bg-black' onClick={handleOnClickDelete}>
				Delete
			</button>
		</div>
	);
};
