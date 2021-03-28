import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework',
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS library among engineers',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
	},
];

const options = [
	{
		label: 'The Red',
		value: 'red',
	},
	{
		label: 'The Green',
		value: 'green',
	},
	{
		label: 'The Blue',
		value: 'blue',
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div className="ui container">
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Select a color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
				<div
					className={`ui message ${
						selected.value === 'red'
							? 'red'
							: selected.value === 'green'
							? 'green'
							: selected.value === 'blue'
							? 'blue'
							: ''
					}`}
				>
					<h1>{selected.label}</h1>
				</div>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};

export default App;
