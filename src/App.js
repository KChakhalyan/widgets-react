import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
// import Search from './components/Search';

const options = [
	{
		label: 'Red Color',
		value: 'red',
	},
	{
		label: 'Green Color',
		value: 'green',
	},
	{
		label: 'Blue Color',
		value: 'blue',
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div className="ui container">
			<Dropdown
				selected={selected}
				onSelectedChange={setSelected}
				options={options}
			/>
		</div>
	);
};
export default App;
