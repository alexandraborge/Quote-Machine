var quote = [
  {
    randomQuotes:"Take care of your body. It\'s the only place you have to live",
    author: "Jim Rohn"
  },
  {randomQuotes:"Let food be thy medicine, and medicine be thy food.",
   author: "Hippocrates"
  },
  {
    randomQuotes:"A healthy outside starts from the inside.",
    author: "Robert Urich"
  },
  {
    randomQuotes:"Heart disease is a food-borne illness.",
    author: "Caldwell Esselstyn, Jr., MD"
  },
  {
    randomQuotes:"Don\'t wait until you\'ve reached your goal to be proud of yourself. Be proud of every step you take toward reaching that goal.",
    author: "unknown"
  },
  {
    randomQuotes:"When you\'re at the gym feeling like you\'ll never be one of those people who look like they\'ve been at it their entire lives, remember that they all started somewhere.",
    author: "unknown"
  },
  {
    randomQuotes:"Motivation is what gets you started. Habit is what keeps you going.",
    author: "Jim Ryin"
  },
  {
    randomQuotes: "Challenging yourself every day is one of the most exciting ways to live.",
    author: "unknown"
  },
  {
    randomQuote:"When you find peace within yourself, you become the kind of person who can live at peace with others.",
    author: "Peace Pilgrim"
  },
  {
    randomQuotes:"Healthy plants and trees yield abundant flowers and fruits. Similarly, from a healthy person, smiles and happiness shine forth like the rays of the sun.",
    author: "B.K. S Iyengar"
  },
   {
     randomQuotes:"We should all be eating fruits and vegetables as if our lives depend on it – because they do.",
     author: "Michael Greger, MD"
   }
]

$(document).ready(function() {
  $('.newQuote').on("click",function(){
    // Find random quote
    var index = Math.floor((Math.random() * quote.length) + 0);
    var singleQuote = quote[index];
    var currentQuote = singleQuote['randomQuotes'];
    var currentAuthor= singleQuote['author'];

    // Put pieces of the quote into html elements
    $('#randomQuotes').html(currentQuote);
    $('#author').html("~" + currentAuthor);

    var baseUrl = 'https://www.twitter.com/intent/tweet'
    var tweet = baseUrl + "?text=" + currentQuote + " ~ " + currentAuthor;

    $('#tweet-me[href]').attr('href', tweet);

  });
});
