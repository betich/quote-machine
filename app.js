function authorFilter(arr, author) {
    return [...arr].filter(e => e.author == author);
}

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let filteredData = authorFilter(data, "Buddha");
    console.log(filteredData);
  });