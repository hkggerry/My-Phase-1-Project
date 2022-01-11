const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

function fetchDrinks(){
    fetch(BASE_URL)
    .then(res=>res.json())
    .then (data => {
        renderDrink1(data.drinks[0])
        renderDrink2(data.drinks[5])
        renderDrink3(data.drinks[4])
    }
    )}

function renderDrink1(drinks){
    const drink1 = document.getElementById("column1")

    const imageTag = document.createElement('img')
    imageTag.src = drinks.strDrinkThumb

    const pTag = document.createElement("p")
    pTag.innerText = drinks.strDrink

    drink1.appendChild(imageTag)
    drink1.appendChild(pTag)

    star = document.querySelector("#star")
    star.addEventListener("mouseover",()=>{
        alert("Ingredients include: "+drinks.strIngredient1+", "+drinks.strIngredient2+", "+drinks.strIngredient3+", "+drinks.strIngredient4);
    })
}

function renderDrink2(drinks){
    const drink2 = document.getElementById("column2")

    const imageTag = document.createElement('img')
    imageTag.src = drinks.strDrinkThumb

    const pTag = document.createElement("p")
    pTag.innerText = drinks.strDrink

    drink2.appendChild(imageTag)
    drink2.appendChild(pTag)

    star2 = document.getElementById("star2")
    star2.addEventListener("mouseover",()=>{
        alert("Ingredient includes: "+drinks.strIngredient1+", "+drinks.strIngredient2+", "+drinks.strIngredient3+", "+drinks.strIngredient4+", "+drinks.strIngredient5+", "+drinks.strIngredient6);
    })
}

function renderDrink3(drinks){
    const drink3 = document.getElementById("column3")

    const imageTag = document.createElement('img')
    imageTag.src = drinks.strDrinkThumb

    const pTag = document.createElement("p")
    pTag.innerText = drinks.strDrink

    drink3.appendChild(imageTag)
    drink3.appendChild(pTag)

    star3 = document.getElementById("star3")
    star3.addEventListener("mouseover",()=>{
        alert("Ingredient includes: "+drinks.strIngredient1+", "+drinks.strIngredient2+", "+drinks.strIngredient3+", "+drinks.strIngredient4+", "+drinks.strIngredient5+", "+drinks.strIngredient6);
    })
}

fetchDrinks()

function houseMargaritas(){

    document.querySelector("#submit1").addEventListener('click', function(){
    document.getElementById("submission").innerHTML="~~~~~~~~~~Order complete! House Margarita coming up~~~~~~~~~~"
    })
}


houseMargaritas();

    function orangeMargaritas(){

        document.querySelector("#submit2").addEventListener('click', function(){
            document.getElementById("submission").innerHTML="~~~~~~~~~~Order complete! Thanks a melon~~~~~~~~~~"
        })
    }

orangeMargaritas()

function redMargaritas(){
    document.querySelector("#submit3").addEventListener('click', function(){
        document.getElementById("submission").innerHTML="~~~~~~~~~~Great Idea! Only the berry best~~~~~~~~~~"
    })
}
redMargaritas()


function hiddenDiscount(){
    let emoji = document.getElementById("emoji")
    emoji.addEventListener("dblclick",function(){
        alert("Hidden 100% off discount applied")
    });
}

hiddenDiscount()