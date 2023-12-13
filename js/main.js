var populer = [
  {
    name: "Oscar Wilde",
    wisdom: "“Be yourself; everyone else is already taken.”",
  },
  {
    name: "Marilyn Monroe",
    wisdom:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  },
  {
    name: "Albert Einstein",
    wisdom:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },
  { name: "Frank Zappa", wisdom: "“So many books, so little time.”" },
  {
    name: " H. Jackson Brown Jr., P.S. I Love You",
    wisdom:
      "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”",
  },
  {
    name: "Andre Gide, Autumn Leaves",
    wisdom:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
  },
  {
    name: "Marilyn Monroe",
    wisdom:
      "“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”",
  },
  {
    name: "Steve Jobs",
    wisdom:
      "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”",
  },
  {
    name: "Ralph Waldo Emerson",
    wisdom:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
  },
  {
    name: "Oscar Wilde",
    wisdom:
      "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
  },
  {
    name: "Friedrich Nietzsche, Twilight of the Idols",
    wisdom: "“Without music, life would be a mistake.”",
  },
  {
    name: "Marcus Tullius Cicero",
    wisdom: "“A room without books is like a body without a soul.”",
  },
  {
    name: "Bernard M. Baruch",
    wisdom:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  },
];

var used = [];

function display() {
  var num;
  do {
    num = Math.floor(Math.random() * populer.length);
  } while (used.includes(num));
  used.push(num);
  console.log(used);
  var cartona = `
  <p class="fw-bold"><span>__</span>${populer[num].name}</p>
  <p>${populer[num].wisdom}</p>
  `;
  document.getElementById("test").innerHTML = cartona;
  if (used.length === populer.length) {
    used = [];
  }
}
