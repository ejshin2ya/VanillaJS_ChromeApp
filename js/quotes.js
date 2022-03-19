const quotes = [
  {
    quote: "The policy of being too cautious is the greatest risk of all.",
    author: "Jawaharlal Nehru",
  },
  {
    quote: "Respect yourself and others will respect you.",
    author: "Confucius",
  },
  {
    quote:
      "Great ability develops and reveals itself increasingly with every new assignment.",
    author: "Baltasar Gracian",
  },
  {
    quote:
      "Everyone has talent. What is rare is the courage to follow the talent to the dark place where it leads.",
    author: "Erica Jong",
  },
  {
    quote:
      "Men of genius do not excel in any profession because they labor in it, but they labor in it because they excel.",
    author: "William Hazlitt",
  },
  {
    quote:
      "I was always looking outside myself for strength and confidence, but it comes from within. It is there all the time.",
    author: "Anna Freud",
  },
  {
    quote:
      "There is no pleasure in having nothing to do; the fun is in having lots to do and not doing it.",
    author: "Mary Wilson Little",
  },
  {
    quote:
      "As long as you derive inner help and comfort from anything, keep it.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "No matter how hard you work for success if your thought is saturated with the fear of failure, it will kill your efforts, neutralize your endeavors and make success impossible.",
    author: "Baudjuin",
  },
  {
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
