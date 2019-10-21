
const jokeHeading = document.querySelector('#jokeHeading');
const btn = document.querySelector('button')
const jokePunchline = document.querySelector('#jokePunchline')

btn.addEventListener('click', getData);

function getData(){
  let joke = new XMLHttpRequest();

  joke.open("GET",'https://official-joke-api.appspot.com/random_joke', true);

  joke.onload = function() {
    if(this.status === 200){
      let value = JSON.parse(this.responseText);
      jokeHeading.innerHTML = value.setup;
      jokePunchline.innerHTML = value.punchline;
      console.log(value)
    }
  };
  joke.send();
}