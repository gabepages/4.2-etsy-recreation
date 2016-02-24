var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');


  //(url: String, callback: Function) -> undefined

  //Execute a callback function with the JSON results from the url specified.

//  Examples
      var url = "https://api.etsy.com/v2/listings/active.js?api_key=wxzc5mem72u720g3hcpbpo86&keywords=terrarium&includes=Images,Shop";


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
  console,log(numSearchResults);
}






//
// var script = $('#search-text').html();
// var templateScript = handlebars.compile(script);
// var context = {
//   numOfResults: numSearchResults;
//   searchShop: 'terrarium';
// }
//
// var compiledHtml = templateScript(context);
//
// $('search-text').html(compiledHtml);
