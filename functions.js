//var url = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10';
//var request = new XMLHttpRequest();
//request.open('GET', url);
//request.responseType = 'json';
//request.send();
//
//


 function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('table');

  const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=200';
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