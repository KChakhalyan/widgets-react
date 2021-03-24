import React from 'react';
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
	return (
		<div className="ui container">
			<Dropdown options={options} />
		</div>
	);
};
export default App;
