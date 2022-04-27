//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const drinks = document.querySelector('#drinks')

document.querySelector('button').addEventListener('click', getDrink)


function getDrink(){
    drinks.classList.toggle('carousel')

    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('.drinkZero').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}



