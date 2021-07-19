const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener ('DOMContentLoaded' , getJoke);  //we're doing this so that we can get joke in the first place on our website

button.addEventListener('click', getJoke);

async function getJoke()
{

   const jokeData = await fetch('https://icanhazdadjoke.com/ ' , {
   headers: {
       'Accept' : 'application/json'
   }
   });
   const jokeObj = await jokeData.json();
//    console.log(jokeObj.joke);  //now we have to put this in joke div
jokeText.innerHTML = jokeObj.joke;
}