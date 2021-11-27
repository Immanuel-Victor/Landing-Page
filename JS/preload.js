
let slider,actualImg, maxImg,index;
let imgs = [];
let advanceBtn = document.querySelector("#advanceButton");
let retractBtn = document.querySelector("#retractButton");
let timer;
let time = 20000;


function preLoad(){

let imgNumber= 1;


    for(index = 0; index <=4; index++){

        imgs[index] = new Image();
        imgs[index].src = `/IMGs/img${imgNumber}.jpg`;
        imgNumber++;

    }
}

function loadImage(img){
    slider.style.backgroundImage = `url('${imgs[img].src}')`;
    slider.style.backgroundRepeat = "no-repeat";
    slider.style.backgroundSize = "cover";
}



function start(){
    preLoad();
    actualImg = 0;
    maxImg = imgs.length;
    slider= document.querySelector("#divSlider");
    loadImage(actualImg);
    advanceBtn.addEventListener("click",tradeImageF);
    retractBtn.addEventListener("click",tradeImageB);
    timer = setInterval(tradeImageF,time);
}

function tradeImageB(){
    actualImg--;
    if(actualImg < 0){
        actualImg = 4;
    }
    loadImage(actualImg);
}

function tradeImageF(){
    actualImg++;
    if(actualImg > maxImg){
        actualImg = 0;
    }
    loadImage(actualImg);
}

window.addEventListener("load", start);