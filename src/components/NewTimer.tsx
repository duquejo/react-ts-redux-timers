import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTimer } from '../actions';

export const NewTimer: FC<any> = () => {
	const [name, setName] = useState<string>('');
	const dispatch = useDispatch();

	const handleOnClick = (): void => {
		dispatch(addTimer(name));
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setName(e.target.value);
	};

	return (
		<div className="new-timer">
			<input
				type="text"
				name="name"
				placeholder="New timer name"
				id="name"
				value={name}
				onChange={handleOnChange}
			/>
			<button onClick={handleOnClick}>Save</button>
		</div>
	);
};
