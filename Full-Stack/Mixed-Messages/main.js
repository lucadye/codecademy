function rand_item(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

const quote = {
	_starts: [
		'Remember,',
		'Don\'t forget,',
		'Tomorrow',
		'Very soon'
	],
	_middles: [
		'it\'ll all be',
		'you\'ll feel',
		'you\'ll see something',
		'you\'ll find something'
	],
	_ends: [
		'better.',
		'new.',
		'incredible.',
		'wonderful.'
	],
	get new () {
		const start = rand_item(this._starts);
		const middle = rand_item(this._middles);
		const end = rand_item(this._ends);
		return `${start} ${middle} ${end}`;
	},
};

function display(message, element) {
	console.log(message);
	element.innerHTML = message;
}


document.getElementsByName('inspiration').forEach((element) => {
	display(quote.new, element);
});
