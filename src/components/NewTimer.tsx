import { ChangeEvent, FC, KeyboardEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTimer } from '../actions';

export const NewTimer: FC<any> = () => {
	const [name, setName] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);

	const dispatch = useDispatch();

	const sendActions = (): void => {
		dispatch(addTimer(name));
		setName('');
		inputRef.current?.focus();
	};

	const handleOnClick = (): void => sendActions();

	const handleOnChangeEnter = (e: KeyboardEvent<HTMLInputElement>): void => {
		if (e.code === 'Enter') {
			sendActions();
		}
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void =>
		setName(e.target.value);

	return (
		<div className="new-timer">
			<input
				ref={inputRef}
				type="text"
				name="name"
				placeholder="Timer name"
				id="name"
				value={name}
				onChange={handleOnChange}
				onKeyDown={handleOnChangeEnter}
			/>
			<button onClick={handleOnClick}>Save</button>
		</div>
	);
};
