var clickedElem = 'random';
const SATLIGHT = '86.9%, 43%';

var query = "buddha";

$('.btn-outline').click(function() {
	assignButton($(this));
});
$('#new-quote').click(async function() {
	// change quote, color here
  	let hue = Math.floor(Math.random() * 360);
  	document.documentElement.style.setProperty('--color', `hsl(${hue}, ${SATLIGHT})`);

	let data = (() => {
		const settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://raw.githubusercontent.com/betich/quote-machine/master/quotes.json",
			"method": "GET"
		}
		$.ajax(settings).done(function (response) {
			console.log(response);
		});
	})();

	console.log(await data);
	let filteredData = filterAuthor(await data, query);
});

function assignButton(item) {
	// Styles
	item.siblings().removeClass('selected').addClass('btn-outline');
	item.removeClass('btn-outline').addClass('selected');

	query = $(item).attr('id');
}

function filterAuthor(arr, author) {
	return arr;
}

$(document).ready(function() {
});
