function ageindays()
{
 var biryear= prompt('whats ur birth year?');
 var ageindayss = (2021 - biryear) * 365;
 var h = document.createElement('h2');
 var texta = document.createTextNode('your are' + ageindayss + 'days old');
 h.setAttribute('id','ageindayss');
 h.appendChild(texta);
  result.appendChild(h);
}
function reset()
{
 document.getElementById('ageindayss').remove();
}

//challenge2: cat genarator
function generatecat()
{
  var image = document.createElement('img');
  
  image.src = "../images/captain marvel new.jpeg";
  addimg.appendChild(image);
}

//challenge 3: rock paper scissors

function rpsgame(yourchoice)
{
//console.log(yourchoice);
var humanchoice , botchoice;
humanchoice = yourchoice.id ;
botchoice = numtochoice(randomtorpsint());
//console.log('comp',botchoice);
  results = deciedwinner(humanchoice,botchoice);//[0.1](hlost/bwon)[1,0](hwn/bl)
 //console.log(results);
 message = finalmessage(results);// {'message' : 'you won' , 'color' : 'green'}
//console.log(message);

rpsfrontend(yourchoice.id,botchoice,message);
//console.log(yourchoice.id,botchoice,message);


}

function randomtorpsint()
{
  return Math.floor(Math.random() * 3);
}

function numtochoice(number)
{
  return ['rock','paper','scissors'][number];
}
function deciedwinner(yourchoice,botchoice)
{
  var rpsdatabase = {
    'rock':{'scissors':1, 'rock':0.5, 'paper': 0},
    'paper':{'scissors':0, 'rock':1, 'paper': 0.5},
    'scissors':{'scissors':0.5, 'rock':0, 'paper': 1}

  };
  var yourscore = rpsdatabase[yourchoice][botchoice];
  var computerscore = rpsdatabase[botchoice][yourchoice];
    
  return[yourscore,computerscore];
}


function finalmessage([yourscore,computerscore])
{
  if(yourscore===0)
  {
    return {'message':'you lost!', 'color': 'red'}; 
  }else if(yourscore===0.5)
  {
    return {'message':'you tied!', 'color': 'pink'}; 
  }
  else{
    return {'message':'you won!', 'color': 'green'}; 
  }
}

function rpsfrontend(humanimagechoice,botimagechoice,finalmessage)
{console.log(humanimagechoice,botimagechoice,finalmessage);
  var imgdatabase =
  {
    'rock': src="../images/rock.jpeg",
    'paper' : document.getElementById('paper').src,
    'scissors': scissors.src

  };

  //let's remove all images to print result
  rock.remove();
  paper.remove();
  scissors.remove();

  var humandiv = document.createElement('div');
   var botdiv = document.createElement('div');
  var messagediv = document.createElement('div');
  humandiv.innerHTML="<img src='" + imgdatabase[humanimagechoice]+ "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
  botdiv.innerHTML="<img src='" + imgdatabase[botimagechoice]+ "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
  messagediv.innerHTML="<h1 style='color:" + finalmessage['color'] + "; font-size :60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
maindiv.appendChild(humandiv);
maindiv.appendChild(messagediv);
maindiv.appendChild(botdiv);


}
//challenge 4: pickcolor
var allbuttons = document.getElementsByTagName('button');

var copyallbuttons = [];
for(let i=0; i<allbuttons.length;i++)
{
copyallbuttons.push(allbuttons[i].classList[1]);//classno.2ofallbuttons
}
console.log(copyallbuttons);

function buttoncolorchange(buttonthingy)
{
  if(buttonthingy.value === 'red')
  {
    buttonsred();
  }
  else if(buttonthingy.value === 'green')
  {
    buttonsgreen();
  }
  else if(buttonthingy.value === 'reset')
  {
    buttonsreset();
  }
  else if(buttonthingy.value === 'random')
  {
    buttonsrandom();
  }
}

function buttonsred()
{
  for(let i=0;i< allbuttons.length;i++)
  {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
     allbuttons[i].classList.add('btn-danger');
  }
}

function buttonsgreen()
{
  for(let i=0;i< allbuttons.length;i++)
  {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
     allbuttons[i].classList.add('btn-success');
  }
}

function buttonsreset()
{
  for(let i=0;i< allbuttons.length;i++)
  {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
     allbuttons[i].classList.add(copyallbuttons[i]);
  }
}

function buttonsrandom()
{
  let choices = ['btn-primary','btn-danger','btn-success','btn-warning']
  
  for(let i=0;i< allbuttons.length;i++)
  {
    let randomnumber = Math.floor(Math.random()*4);
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
     allbuttons[i].classList.add(choices[randomnumber]);
  }
}

//challenge:5 blackjack
let blackjackgame={
  'you': {scorespan :'#your-blackjack-result','div':'#yourr-box','#score': 0},
  'dealer': {scorespan :'#dealer-blackjack-result','div':'#dealer-box','#score': 0},
   'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A' ],
};
const YOU = blackjackgame['you'];
const DEALER = blackjackgame['dealer']

const hitsound = new Audio('../sounds/swish.m4a');


document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal);

function blackjackhit()
{
  let card = randomcard();
  console.log(card);
  showCard(YOU);
}
function randomcard()
{
  let randomindex = Math.floor(Math.random() * 13);
  return blackjackgame['cards'][randomindex];
}
function showCard(activeplayer)
{
  let imgg = document.createElement('img');
  
  imgg.src = '../images/9.png';

 
  document.querySelector(activeplayer['div']).appendChild(imgg);


  hitsound.play();
}
function blackjackdeal()
{
  let yourimages = document.querySelector('#your-box').querySelectorAll('img');
  let dealerimages = document.querySelector('#dealer-box').querySelectorAll('img');
  
   for(i=0;i<yourimages.length;i++)
   {
     yourimages[i].remove();
   }
    for(i=0;i<dealerimages.length;i++)
   {
      yourimages[i].remove();
   }
}