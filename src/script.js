// const glyphStates = {
//     "♡": "♥",
//     "♥": "♡"
//   };
  
//   const colorStates = {
//     "red" : "",
//     "": "red"
//   };

const BASE_URL = 'https://www.reddit.com/r/food/comments/n2t8k8/homemade_crunchwrap_supreme_and_fire_sauce/.json'

function fetchDrinks(){
    fetch(BASE_URL)
    .then(res=>res.json())
    .then (data => console.log(data))
        // renderDrink2(data.drinks[1])
        // renderDrink3(data.drinks[2])
    }

function renderDrink1(data){
    const drink1 = document.getElementById("column1")

    const imageTag = document.createElement('img')
    imageTag.src = data.children.data.thumbnail

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


function crunchWrapSupreme(){
    // let img = document.createElement("img");
    // img.src = "images/TacoBell CrunchWrap Supreme.webp"
    // let image = document.getElementById("Top1");
    // image.classList.add("container");

    // let containerC = document.getElementById("column1")
    // containerC.appendChild(img);

    document.querySelector("#reload1")
        .addEventListener('click', () => {window.location.reload(true);
        });
}


crunchWrapSupreme();

    function softPotatoTaco(){
    let img = document.createElement("img");
    img.src = "images/Soft Potato Taco.jpeg"
    let image2 = document.getElementById("Top2");
    image2.classList.add("container");

    let containerS = document.getElementById("column2")
    containerS.appendChild(img);

    document.querySelector("#reload2")
        .addEventListener('click', () => {window.location.reload(true);
        });
}

softPotatoTaco()

function doritoLocosTaco(){
    let img = document.createElement("img");
    img.src = "images/Dorito Locos Taco.webp"
    let image3 = document.getElementById("Top3");
    image3.classList.add("container");

    let containerD = document.getElementById("column3")
    containerD.appendChild(img);

    document.querySelector("#reload3")
        .addEventListener('click', () => {window.location.reload(true);
        });
}

doritoLocosTaco()

// const articleHearts = document.querySelectorAll(".like-glyph");

// function likeCallback(e) {
//     const heart = e.target;
//     mimicServerCall()
//       .then(function(serverMessage){
//         alert(serverMessage);
//         heart.innerText = glyphStates[heart.innerText];
//         heart.style.color = colorStates[heart.style.color];
//       })
//       .catch(function(error) {
//         alert("Something went wrong!");
//       });
//   }

//   for (const glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }

// likeCallback(e);

// function mimicServerCall() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         resolve();
//       }, 300);
//     });
//   }
// mimicServerCall();