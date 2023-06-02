import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { parseTimersToChartJs } from '../utils';
import { useSelector } from 'react-redux';
import { CHARTJS_CONFIG } from '../types/constants';

ChartJS.register(ArcElement, Legend);

export const Statistics = () => {
	const timers = useSelector((state: any) => state.timers);
	return (
		<>
			{timers?.length > 0 ? (
				<Doughnut
					data={parseTimersToChartJs(timers)}
					options={CHARTJS_CONFIG.options}
				/>
			) : (
				<h5 className="text-lg italic">Please create a timer first.</h5>
			)}
		</>
	);
};
