var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');

//
//   //(url: String, callback: Function) -> undefined
//
//   //Execute a callback function with the JSON results from the url specified.
//

var url;
url =  "https://api.etsy.com/v2/listings/active.js?api_key=wxzc5mem72u720g3hcpbpo86&keywords=terrarium&includes=Images,Shop";


var newStuff = $('.search-btn').on('click', function(){
  console.log(url);
  var word = $('.search-area').val()
  var urlPartOne = "https://api.etsy.com/v2/listings/active.js?api_key=wxzc5mem72u720g3hcpbpo86&keywords=";
  var urlPartTwo = "&includes=Images,Shop";
  var wholeUrl = urlPartOne + word + urlPartTwo;
  url = wholeUrl;
  return url
})
// url =newStuff;

function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');

    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}




function logData(data) {
  console.log(data);
  bigScope(data);
}

fetchJSONP(url, logData);

function bigScope(data){
var numSearchResults = data.count;
var script = $('#search-text').html();
var templateScript = handlebars.compile(script);
var context = {
  'numOfResults': numSearchResults,
  'searchShop': 'terrarium'
}
var compiledHtml = templateScript(context);

$('.search-text-section').html(compiledHtml);


var source = $('#thumbnails').html();
var templateSource = handlebars.compile(source);


var compiled = templateSource(data);

$('.images-section').html(compiled);


$('#sort-by').on('click',function(event){
    $('.sort-list').toggleClass('hide-it');


})
}
//
//
//
//
//
//
//
//








//
// $(function(){
//   var results = $.ajax('');
// }(jQuery));
