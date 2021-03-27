import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
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
			<div className="ui segment">
				<div className="ui two column very relaxed grid">
					<div className="column">
						<Dropdown
							label="Select a color"
							selected={selected}
							onSelectedChange={setSelected}
							options={options}
						/>
					</div>
					<div className="column">
						<Translate />
					</div>
				</div>
				<div className="ui vertical divider">or</div>
			</div>
		</div>
	);
};
export default App;
