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
    let img = document.createElement("img");
    img.src = "images/TacoBell CrunchWrap Supreme.webp"
    let image = document.getElementById("Top1");
    image.classList.add("container");

    let containerC = document.getElementById("column1")
    containerC.appendChild(img);

}


crunchWrapSupreme();

    function softPotatoTaco(){
    let img = document.createElement("img");
    img.src = "images/Soft Potato Taco.jpeg"
    let image2 = document.getElementById("Top2");
    image2.classList.add("container");

    let containerS = document.getElementById("column2")
    containerS.appendChild(img);
}

softPotatoTaco()

function doritoLocosTaco(){
    let img = document.createElement("img");
    img.src = "images/Dorito Locos Taco.webp"
    let image3 = document.getElementById("Top3");
    image3.classList.add("container");

    let containerD = document.getElementById("column3")
    containerD.appendChild(img);
}

doritoLocosTaco()