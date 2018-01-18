// PUBLIC API METHODS 

//Endpoint: /ticker/
//Method: GET
//Optional parameters:
//(int) start - return results from rank [start] and above
//(int) limit - return a maximum of [limit] results (default is 100, use 0 to return all results)
//(string) convert - return price, 24h volume, and market cap in terms of another currency. Valid values are: 
//"AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"

//Example: https://api.coinmarketcap.com/v1/ticker/
//Example: https://api.coinmarketcap.com/v1/ticker/?limit=10
//Example: https://api.coinmarketcap.com/v1/ticker/?start=100&limit=10
//Example: https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10

//Limits
//Please limit requests to no more than 10 per minute.
//Endpoints update every 5 minutes.

 function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('table');

  const url = 'https://api.coinmarketcap.com/v1/ticker/?convert=GBP&limit=200';
  fetch(url).then(function(response) { 
	// Convert to JSON
	return response.json();
}).then(function(array) {
	// Yay, `j` is a JavaScript object
    //	console.log(j);
    var output = array.map(function (coin) {
        console.log(coin);
        //console.log(coin.name, coin.symbol, coin.rank, coin.price_usd);
    })
});