'use strict'
//api.giphy.com

// /v1/gifts/search


let api = "http://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=dc6zaT0xFJmzC";
let query = "&q=rainbow";

function setup() {
  noCanvas();
  let url = api + apiKey + query;
  loadJSON(url, gotData);

}

function gotData(giphy) {
println(giphy.data[i].images.original.url);
  for (let i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
 }
}

function draw() {

}
