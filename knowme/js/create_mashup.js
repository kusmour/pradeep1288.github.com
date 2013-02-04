function HowMany(apiKey, authUrl, apiUrl) {
  this.foursquare = new Foursquare(apiKey, authUrl, apiUrl);
}

/**
 * Fetch users's history, and then render in callbkac.
 */
HowMany.prototype.run = function() {
  this.foursquare.venueHistory(bind(this.onHistory, this));
}

/**
* Compute the number of coffee's consumed
*/

function getCoffeeCount(response)
{
    var coffee_count = 0;

    for (var i=0; i<response.length; i++)
    {
      var data = response[i]['venue'];
      if (data.categories.length !=0 )
      {
        if (data.categories[0].indexOf('Coffee') > -1)
        {
          coffee_counts ++;
        }
      }
    }
  return coffee_count;
}
/**
* Gets a random funny fact based on the number of coffee's consumed
*/
function getRandomCoffeeFunFact(coffee_count)
{
  //Izaaz's code here.
}

/**
 * Given response from venuehistory, build a map from venue ID to history item.
 * @private
 */
HowMany.prototype.onHistory = function(history) {
  var coffee_html = [];
  var coffee_counts = getCoffeeCount(history);
  $('#coffee_html').html(coffee_html.join(''));
  $('#coffee_counts').html(coffee_counts + '');
}

$(function() {

  if(window.location.href.indexOf('http://localhost/knowme') >= 0){
    new HowMany('NDP5V3HX44XRYA51JQWLMV500PXCCB4ZJ23DZJPNYDYMP5TU', 'https://foursquare.com/', 'https://api.foursquare.com/').run();
  }    
  else 
    new HowMany('4VAMTWCX4CACSUXI4LDE0J31W3W3NV5GEOKUR42MWR2TY3W5', 'https://foursquare.com/', 'https://api.foursquare.com/').run();
});
