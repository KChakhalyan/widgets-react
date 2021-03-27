import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
	{
		label: 'Africans',
		value: 'af',
	},
	{
		label: 'Arabic',
		value: 'ar',
	},
	{
		label: 'Hindi',
		value: 'hi',
	},
	{
		label: 'Russian',
		value: 'ru',
	},
];

const Translate = () => {
	const [language, setlanguage] = useState(options[0]);
	const [text, settext] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<div className="label">Enter text</div>
					<input
						className="ui input"
						type="text"
						value={text}
						onChange={(e) => settext(e.target.value)}
					/>
				</div>
			</div>

			<Dropdown
				label="Select a Language"
				selected={language}
				onSelectedChange={setlanguage}
				options={options}
			/>
		</div>
	);
};

export default Translate;
