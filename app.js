var clickedElem = 'random';
var query = "Steve Jobs";

const $quote = $("#text");
const $author = $("#author");
const $tweet = $("#tweet-quote");
const SATLIGHT = '86.9%, 43%';


$('.btn-outline').click(function() {
	assignButton($(this));
});

$('#new-quote').click(async function() {
  	let hue = Math.floor(Math.random() * 360);
  	document.documentElement.style.setProperty('--color', `hsl(${hue}, ${SATLIGHT})`);

	getQuoteAndDisplay();
});

async function getQuoteAndDisplay() {
	let rawdata = await $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://raw.githubusercontent.com/betich/quote-machine/master/quotes.json",
		"method": "GET"
	})
	.done(function(response) {
		return response
	})
	.fail(function() {
		console.log("Error while fetching data");
	});
	
	let filterAuthorAndRandom = (data, author) => {
		let modifiedData;
		try {
			if (author === "Random") {
				modifiedData = data;
			} else {
				modifiedData = data.filter(e => e.author === author);
			}
		} catch(e) {
			console.log("ERROR: " + e.message);
		}
		let idx = Math.floor(Math.random() * modifiedData.length);
		return modifiedData[idx]
	}

	let displayQuotes = (quote) => {
		$quote.text(quote.quote);
		$author.text(quote.author);
		$tweet.attr('href', "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=\"" + quote.quote + "\" - " + quote.author);
	}

	let quote = filterAuthorAndRandom(JSON.parse(rawdata), query);
	displayQuotes(quote);
	return quote
}

function assignButton(item) {
	item.delay(7000).fadeIn();
	item.siblings().removeClass('selected').addClass('btn-outline');
	item.removeClass('btn-outline');

	query = $(item).attr('data-tag');
}

$(document).ready(function() {
	assignButton($("#random"));
	getQuoteAndDisplay();
});
