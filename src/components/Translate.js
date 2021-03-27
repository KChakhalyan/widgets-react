import React, { useState } from 'react';
import Convert from './Convert';
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
	{
		label: 'Dutch',
		value: 'nl',
	},
];

const Translate = () => {
	const [language, setlanguage] = useState(options[0]);
	const [text, setText] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label htmlFor="text" className="label">
						Enter text
					</label>
					<input
						name="text"
						className="ui input"
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
			</div>
			<br />
			<Dropdown
				label="Select a Language"
				selected={language}
				onSelectedChange={setlanguage}
				options={options}
			/>
			<div className="ui divider"></div>
			<h3 className="ui header">Output</h3>
			<Convert language={language} text={text} />
		</div>
	);
};

export default Translate;
