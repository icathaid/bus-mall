'use strict';
//-=-=-=-=-=-=-=-vars
var allProducts = [];
var prodBox = [];
var clickCount = 0; 
var stuff = [];
var votes = [];
var crap = [];
var crapChart;
var chartDrawn = false;
var data = {
        labels: crap,
        datasets: [{
            data: votes,
            label: 'Votes',
            backgroundColor: ['navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red'],
        }]
    };
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-fun
function Product(name, filepath, title, clicks, views, percentage) {
    this.name = name;
    this.filepath = filepath;
    this.title = title;
    this.clicks = clicks;
    this.views = views;
    allProducts.push(this);
};
//-=-=-=-=-=-Create New Products-=-=-=-=-=-=-
new Product('bag', 'img/bag.jpg', 'R2D2 Luggage', 0, 0);
new Product('banana', 'img/banana.jpg', 'Banana Slicer', 0, 0);
new Product('bathroom', 'img/bathroom.jpg', 'Toilet Paper Tablet Holder', 0, 0);
new Product('boots', 'img/boots.jpg', 'Open-toed Rain Boots', 0, 0);
new Product('breakfast', 'img/breakfast.jpg', 'All-in-One Breakfast Making Station', 0, 0);
new Product('bubblegum', 'img/bubblegum.jpg', 'Meatball Bubble Gum', 0, 0);
new Product('chair', 'img/chair.jpg', 'The world\'s least comfortable chair', 0, 0);
new Product('cthulu', 'img/cthulhu.jpg', 'The Destroyer of Worlds', 0, 0);
new Product('dog-duck', 'img/dog-duck.jpg','Duck Bill for your Dog', 0, 0);
new Product('dragon', 'img/dragon.jpg', 'Dragon Meat', 0, 0);
new Product('pen', 'img/pen.jpg', 'Pentencils', 0, 0);
new Product('pet-sweep', 'img/pet-sweep.jpg', 'Pet Sweeper', 0, 0);
new Product('scissors', 'img/scissors.jpg', 'Pizza Scissors', 0, 0);
new Product('shark', 'img/shark.jpg', 'Shark Sleeping Bag', 0, 0);
new Product('sweep', 'img/sweep.png', 'Baby Sweeper', 0, 0);
new Product('tauntaun', 'img/tauntaun.jpg', 'TaunTaun Sleeping Bag', 0, 0);
new Product('unicorn', 'img/unicorn.jpg', 'True story - I have owned this actual product.  I bought it when drunk and left it in my cupboard as a joke for my First Sergeant to find during barracks inspections.', 0, 0);
new Product('usb', 'img/usb.gif', 'Monster Tail USB Drive', 0, 0);
new Product('water-can', 'img/water-can.jpg', 'Self-Watering Watering Can', 0, 0);
new Product('wine-glass', 'img/wine-glass.jpg', 'Pythagorean Wine Glass', 0, 0);
images.addEventListener('click', letsGo);
prodPicA.addEventListener('click', tallyVotesA);
prodPicB.addEventListener('click', tallyVotesB);
prodPicC.addEventListener('click', tallyVotesC);
checkLocalStorage();
//this runs on page load to fill up prodBox with 6 unique numbers
for (var i = 0; i < 6; i++){
    makeRandomProd();
};
//Makes a new random product
function makeRandomProd(){
    var randomProd = Math.floor(Math.random() * allProducts.length);
    if (prodBox.includes(randomProd)){
        makeRandomProd();
    } else {
        prodBox.push(randomProd);
        if (prodBox.length > 6){
            prodBox.shift();
        };
    };
};
//this removes the first 3 numbers of the prodBox array, bringing the next 3 non-duplicated numbers to the front, and replacing them with 3 new non-duplicated numbers.
function newProds(){
    for (var j = 0; j < 3; j++){
        makeRandomProd();
    }
};
//-=-=-=-=-draw the first three images and log that they were viewed:
prodPicA.src = allProducts[prodBox[0]].filepath;
prodPicA.title = allProducts[prodBox[0]].title;
allProducts[prodBox[0]].views +=1;
prodPicB.src = allProducts[prodBox[1]].filepath;
prodPicB.title = allProducts[prodBox[1]].title;
allProducts[prodBox[1]].views +=1;
prodPicC.src = allProducts[prodBox[2]].filepath;
prodPicC.title = allProducts[prodBox[2]].title;
allProducts[prodBox[2]].views +=1;
//-=-=-=-=-draw three new images and log that each was viewed:
function letsGo(){
    if (clickCount < 25){
        newProds();
        prodPicA.src = allProducts[prodBox[0]].filepath;
        prodPicA.title = allProducts[prodBox[0]].title;
        allProducts[prodBox[0]].views +=1;
        prodPicB.src = allProducts[prodBox[1]].filepath;
        prodPicB.title = allProducts[prodBox[1]].title;
        allProducts[prodBox[1]].views +=1;
        prodPicC.src = allProducts[prodBox[2]].filepath;
        prodPicC.title = allProducts[prodBox[2]].title;
        allProducts[prodBox[2]].views +=1;
        clickCount +=1;
    } else {
        images.removeEventListener('click', letsGo);
        prodPicA.removeEventListener('click', tallyVotesA);
        prodPicB.removeEventListener('click', tallyVotesB);
        prodPicC.removeEventListener('click', tallyVotesC);
        countAllVotes();
        calcPercentage();
        localStorage.setItem('allProducts', JSON.stringify(allProducts));
        return location.href = 'page2.html';
    };
};
function tallyVotesA(){allProducts[prodBox[0]].clicks +=1;};
function tallyVotesB(){allProducts[prodBox[1]].clicks +=1;};
function tallyVotesC(){allProducts[prodBox[2]].clicks +=1;};
function checkLocalStorage(){
    if (!localStorage.allProducts){
        localStorage.setItem('allProducts', JSON.stringify(allProducts));
    } else {
        allProducts = JSON.parse(localStorage.getItem('allProducts'));
    };
};
function countAllVotes(){
    for (var i = 0; i < allProducts.length; i++){
        votes[i] = allProducts[i].clicks;
        crap[i] = allProducts[i].name;
    }
};
function calcPercentage(){
    for (var i = 0; i < allProducts.length; i++){
        allProducts[i].percentage = allProducts[i].clicks / allProducts[i].views;
    };
};