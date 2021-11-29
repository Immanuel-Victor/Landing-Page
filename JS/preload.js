
let slider,actualImg, maxImg,index,sTime,sLoad,btnValue,;
let imgs = [];
let advanceBtn = document.querySelector("#advanceButton");
let retractBtn = document.querySelector("#retractButton");
let timer;
let time = 0;



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
    time=0;
    slider= document.querySelector("#divSlider");
    loadImage(actualImg);
    advanceBtn.addEventListener("click",function(){
        buttonValue= 1;
        tradeImage(buttonValue);
    });
    retractBtn.addEventListener("click",function(){
        buttonValue = -1;
        tradeImage(buttonValue);
    });
}



function tradeImage(direction){
    time=0;
    actualImg+=direction;
    if(actualImg > maxImg){
        actualImg = 0;
    }else if(actualImg < 0){
        actualImg = maxImg;
    }

    loadImage(actualImg);
}

window.addEventListener("load", start);