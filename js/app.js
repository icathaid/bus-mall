'use strict';
function pol(){
    alert('proof of life');
}
var allProducts = [];
var clickCount = 0; 
function Product(name, filepath, clicks, views) {
    this.name = name;
    this.filepath = filepath;
    this.clicks = clicks;
    this.views = views;
    allProducts.push(this);
};


new Product('bag', 'img/bag.jpg', 0, 0);
new Product('banana', 'img/banana.jpg', 0, 0);
new Product('bathroom', 'img/bathroom.jpg', 0, 0);
new Product('boots', 'img/boots.jpg', 0, 0);
new Product('breakfast', 'img/breakfast.jpg', 0, 0);
new Product('bubblegum', 'img/bubblegum.jpg', 0, 0);
new Product('chair', 'img/chair.jpg', 0, 0);
new Product('cthulu', 'img/cthulhu.jpg', 0, 0);
new Product('dog-duck', 'img/dog-duck.jpg', 0, 0);
new Product('dragon', 'img/dragon.jpg', 0, 0);
new Product('pen', 'img/pen.jpg', 0, 0);
new Product('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
new Product('scissors', 'img/scissors.jpg', 0, 0);
new Product('shark', 'img/shark.jpg', 0, 0);
new Product('sweep', 'img/sweep.png', 0, 0);
new Product('tauntaun', 'img/tauntaun.jpg', 0, 0);
new Product('unicorn', 'img/unicorn.jpg', 0, 0);
new Product('usb', 'img/usb.gif', 0, 0);
new Product('water-can', 'img/water-can.jpg', 0, 0);
new Product('wine-glass', 'img/wine-glass.jpg', 0, 0);



//for expediency/testing, cliucks points to prodPic.alt and views points to prodPic.title
//randomness is not generated yet, I am manually feeding it an index via the showProd() func


function randomProd(){
    var randomProdA = Math.floor(Math.random() * allProducts.length);
    var randomProdB = Math.floor(Math.random() * allProducts.length);
    var randomProdC = Math.floor(Math.random() * allProducts.length);
    if (randomProdA === randomProdB || randomProdA === randomProdC || randomProdB === randomProdC){
        randomProd();
    } else {
        prodPicA.src = allProducts[randomProdA].filepath;
        allProducts[randomProdA].views +=1;
        console.log(allProducts[randomProdA].name + ' views: ' + allProducts[randomProdA].views)
        prodPicB.src = allProducts[randomProdB].filepath;
        allProducts[randomProdB].views +=1;
        console.log(allProducts[randomProdB].name + ' views: ' + allProducts[randomProdB].views)
        prodPicC.src = allProducts[randomProdC].filepath;
        allProducts[randomProdC].views +=1;
        console.log(allProducts[randomProdC].name + ' views: ' + allProducts[randomProdC].views)
    };

}
images.addEventListener('click', checkCount);

function checkCount(){
    if (clickCount < 25) {
        clickCount +=1;
        randomProd();
    } else {
        return alert('25 clicks!');
    }
};
randomProd();
prodPicA.addEventListener('click', testA);
prodPicB.addEventListener('click', pol);
prodPicC.addEventListener('click', pol);

function testA(){

};