'use strict'
//api.giphy.com

// /v1/gifts/search


let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=POULRRnK7egZyaCOf0NNWAIGgNbpJAhU";
let query = "&q=dogs";

function setup() {
  noCanvas();
  let url = api + apiKey + query;
  loadJSON(url, gotData);

}

function gotData(giphy) {
console.log(giphy.data[0].images.original.url);
  for (let i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
 }
}

function draw() {

}
