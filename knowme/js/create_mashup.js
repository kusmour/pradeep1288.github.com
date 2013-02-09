var coffee_json="{\"name\": \"coffee\",  \"range\": 25, \"comments\": { \"0\":[ \"Thats it?\", \"WTF?! Do you want the starbucks to shut down?\",\"Haven't you been taking a girl out for coffee?\", \"I'm glad you alteast know that a drink called coffee exists!\" ], \"1\": [ \"Woah! slow down dude!\",\"Spend money more wisely!\", \"I hope its just one girl you've been taking to the coffee shop\", \"Caffine rocks?\", \"You'll soon be arrested for high drug intake!\" ] }}";


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
        if (data.categories[0].name.indexOf('Coffee') > -1)
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
    var myJson = $.parseJSON(coffee_json);
    var range = myJson.range;
    var commentType = Math.floor(intake/range);
    //bounds check. If you get a high value, it defaults to the last set of comments
    if(commentType > getLength(myJson.comments))
        commentType = getLength(myJson.comments) - 1;
    var possibleComments = myJson.comments[commentType];
    var commentIndex = Math.floor(Math.random() * possibleComments.length);
    return(possibleComments[commentIndex]);
}

/**
* Takes in a dictionary object and gives back the number of elements in that dictionary. Used for bounds checking 
* in the getRandomCoffeeFunFact method
* @private
*/
function getLength(comments)
{
    var count = 0;
    for (var i in comments) {
        if (comments.hasOwnProperty(i)) count++;
    }
    return count;
}

/**
 * Given response from venuehistory, build a map from venue ID to history item.
 * @private
 */
HowMany.prototype.onHistory = function(history) {
  var coffee_html = [];
  var coffee_counts = getCoffeeCount(history);
  var random_coffee_fact = getRandomCoffeeFunFact(coffee_counts);
  $('#coffee_fact').html(random_coffee_fact + '');
}

$(function() {

  if(window.location.href.indexOf('http://localhost/knowme') >= 0){
    new HowMany('NDP5V3HX44XRYA51JQWLMV500PXCCB4ZJ23DZJPNYDYMP5TU', 'https://foursquare.com/', 'https://api.foursquare.com/').run();
  }    
  else 
    new HowMany('4VAMTWCX4CACSUXI4LDE0J31W3W3NV5GEOKUR42MWR2TY3W5', 'https://foursquare.com/', 'https://api.foursquare.com/').run();
});
