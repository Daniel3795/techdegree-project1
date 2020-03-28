/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
      quote: '"Don\'t be so humble, you\'re not that great"',
      source: "Golda Meir",
      citation: "As Good As Golda: The Warmth and Wisdom of Israel's Prime Minister",
      year: "1970"
  },
  {
      quote: '"If we change ourselves, the tendencies in the world would also change."',
      source: "Mohandas Gandhi",
      citation: "The Collected Works of Mahatma Gandhi, volume XII",
      year: "1913"
  },
  {
      quote: '"Do I not destroy my enemies when I make them my friend?"',
      source: "Abraham Lincoln",
      citation: "The Gettysburg Address",
      year: "1863"
  },
  {
      quote: '"Only thing we have to fear is fear itself."',
      source: "Franklin D. Roosevelt",
      citation: "Inaugural Address",
      year: "1933"
  },
  {
      quote: '"Life is what happens when you\'re busy making other plans."',
      source: "John Lennon",
      citation: "Beautiful Boy (Darling Boy)",
      year: "1980"
  },
  {
      quote: '"I\'d rather not live like there isn\'t a god, than die and find out there really is."',
      source: "Kendrick Lamar",
      citation: "Faith",
      year: "2009"
  }
  ];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let random = Math.floor((Math.random() * quotes.length));
  return quotes[random];
};


/***
 * `printQuote` function
***/
function printQuote() {
  let quoteList = getRandomQuote();
  let message = ''
  message += '<p class="quote">' + quoteList.quote + '</p>';
  message += '<div><p1 class="source">' + quoteList.source +'<br></br></p1></div>';
  if (quoteList.citation) {
      message += '<div><span class="citation">' + quoteList.citation + '</span></div>';
  }
  if (quoteList.year) {
      message += '<div><span class="year">' + quoteList.year + '</span></div>';
  }
  message + '</p>';
  return document.write(message);
};

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);