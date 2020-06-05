# Random Quote Generator

![Screenshot of my site](https://www.dl.dropboxusercontent.com/s/bx5i17a8avtxw9f/quote-machine.png "Screentshot")

Codepen Link: https://codepen.io/Betich/full/LYGYYMv

I'm only publishing this repo because I need to link the JSON file to my project.

## Resources

Quotes are gathered from
> https://github.com/skolakoda/programming-quotes-api

and

>  https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json

You can send a GET request to https://raw.githubusercontent.com/betich/quote-machine/master/quotes.json to get the quotes from my json file.

### jQuery
```javascript
async function request() {
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

  return JSON.parse(rawdata)
}
```

---

*This project is made for a FreeCodeCamp Certificate project.*

*All quotes' lengths are also less than 280 characters, which is the minimum length limit for a tweet*
