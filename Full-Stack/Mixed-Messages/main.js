function rand_item(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

const quote = {
	_previous: [
		'',
		'',
		'',
	],
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
		let start = rand_item(this._starts);
		while (start == this._previous[0]) {
			start = rand_item(this._starts);
		}
		this._previous[0] = start;

		let middle = rand_item(this._middles);
		while (middle == this._previous[1]) {
			middle = rand_item(this._middles);
		}
		this._previous[1] = middle;

		let end = rand_item(this._ends);
		while (end == this._previous[2]) {
			end = rand_item(this._ends);
		}
		this._previous[2] = end;

		return `${start} ${middle} ${end}`;
	},
};

const background = {
	_previous: '',
	_urls: [
		'./images/a.jpg',
		'./images/b.jpg',
		'./images/c.jpg',
		'./images/d.jpg'
	],
	get new () {
		let url = rand_item(this._urls);

		while (url == this._previous) {
			url = rand_item(this._urls);
		}

		this._previous = url;

		return url;
	},
}

function text(message, element) {
	console.log(message);
	element.innerHTML = message;
};
function picture(image, element) {
	console.log(image);
	element.setAttribute('src', image);
};

const quotes = document.getElementsByName('inspire-quote');
quotes.forEach(q => {
	text(quote.new, q);
});

const images = document.getElementsByName('inspire-image');
images.forEach(i => {
	picture(background.new, i);
});