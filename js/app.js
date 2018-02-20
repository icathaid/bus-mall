'use strict';
function pol(){
    alert('proof of life');
}

var allProducts = [];
var clickCount = 0; 
var placeHolderA = 0;
var placeHolderB = 0;
var placeHolderC = 0;

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


function randomProd(){
    if (clickCount < 25){
        var randomProdA = Math.floor(Math.random() * allProducts.length);
        var randomProdB = Math.floor(Math.random() * allProducts.length);
        var randomProdC = Math.floor(Math.random() * allProducts.length);
        if (randomProdA !== randomProdB && randomProdA !== randomProdC && randomProdB !== randomProdC){
            prodPicA.src = allProducts[randomProdA].filepath;
            allProducts[randomProdA].views +=1;
            placeHolderA = randomProdA;

            prodPicB.src = allProducts[randomProdB].filepath;
            allProducts[randomProdB].views +=1;
            placeHolderB = randomProdB;

            prodPicC.src = allProducts[randomProdC].filepath;
            allProducts[randomProdC].views +=1;
            placeHolderC = randomProdC;

            clickCount +=1;
        } else {
            randomProd();
        };
    } else {
            for (var i = 0; i < allProducts.length; i++){
                console.log(allProducts[i].name + ' was clicked ' + allProducts[i].clicks + ' times out of ' + allProducts[i].views + ' views.');
            };
            return alert('25 clicks');
        };
    };       

function tallyVotesA(){allProducts[placeHolderA].clicks +=1;};
function tallyVotesB(){allProducts[placeHolderB].clicks +=1;};
function tallyVotesC(){allProducts[placeHolderC].clicks +=1;};

randomProd();

images.addEventListener('click', randomProd);
images.addEventListener('click', randomProd);
images.addEventListener('click', randomProd);
prodPicA.addEventListener('click', tallyVotesA);
prodPicB.addEventListener('click', tallyVotesB);
prodPicC.addEventListener('click', tallyVotesC);

