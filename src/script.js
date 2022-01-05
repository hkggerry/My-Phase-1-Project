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

    drink1.appendChild(imageTag)
}

function renderDrink2(drinks){
    const drink2 = document.getElementById("column2")

    const imageTag = document.createElement('img')
    imageTag.src = drinks.strDrinkThumb

    drink2.appendChild(imageTag)
}

function renderDrink3(drinks){
    const drink3 = document.getElementById("column3")

    const imageTag = document.createElement('img')
    imageTag.src = drinks.strDrinkThumb

    drink3.appendChild(imageTag)
}

fetchDrinks()

function createDiv(){
    let div = document.createElement('div');
    div.id = 'Top1';
    document.body.appendChild(div);
}

createDiv();

function createDiv2(){
    let div2 = document.createElement('div');
    div2.id = 'Top2';
    document.body.appendChild(div2);
}
    
createDiv2();

function createDiv3(){
    let div3 = document.createElement('div');
    div3.id = 'Top3';
    document.body.appendChild(div3);
}
    
createDiv3();


function houseMargaritas(){

    document.querySelector("#reload1")
        .addEventListener('click', () => {window.location.reload(true);
        });
}


houseMargaritas();

    function orangeMargaritas(){

    document.querySelector("#reload2")
        .addEventListener('click', () => {window.location.reload(true);
        });
}

orangeMargaritas()

function redMargaritas(){
    document.querySelector("#reload3")
        .addEventListener('click', () => {window.location.reload(true);
        });
}

redMargaritas()
