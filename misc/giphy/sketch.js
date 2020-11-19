'use strict'
var api = "http://api.giphy.com/v1/gifts/search?";
var apiKey = "&api_key=dc6zaT0xFJmzC";
var query = "&q=rainbow";

function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);

}

function gotData (giphy) {
createImg(giphy.data[0].images.original.url);
}

function draw() {

}
