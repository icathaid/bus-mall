'use strict';
function pol(){
    alert('proof of life');
}
//-=-=-=-=-=-=-=-test
//pullData();

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
            label: 'bill',
            backgroundColor: ['navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red'],
        }]
    };
//-=-=-=-=-=-=-=-constructor functions
function Product(name, filepath, clicks, views, percentage) {
    this.name = name;var thing2 = [];var thing2 = [];
    this.filepath = filepath;
    this.clicks = clicks;
    this.views = views;
    allProducts.push(this);
};
//-=-=-=-=-this kind of works, leaving it here as a template for other functions
//build out other kinds of graphs until you figure out what part of the syntax you're fucking up
function makeChart(){
    var ctx = document.getElementById('crapChart').getContext('2d');
    crapChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          responsive: false,
          legend: {display: true}, 
          title: {display: true, text: 'this is my title'}
        },
      });
      chartDrawn = true;
    }

//-=-=-=-=-=-WRAP THIS IN A FOR LOOP-=-=-=-=-=-=-
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
checkLocalStorage();
//event listeners
images.addEventListener('click', letsGo);
prodPicA.addEventListener('click', tallyVotesA);
prodPicB.addEventListener('click', tallyVotesB);
prodPicC.addEventListener('click', tallyVotesC);

//this runs on page load to fill up prodBox with 6 unique numbers
for (var i = 0; i < 6; i++){
    makeRandomProd();
};
function makeRandomProd(){
    var randomProd = Math.floor(Math.random() * allProducts.length);
    if (prodBox.includes(randomProd)){
        makeRandomProd();
    } else {
        prodBox.push(randomProd);
        if (prodBox.length > 6){
            prodBox.shift();
            //console.log(prodBox);
        };
    };
};
//this removes the first 3 numbers of the prodBox array, bringing the next 3 non-duplicated numbers to the front, and replacing them with 3 new non-duplicated numbers.
function newProds(){
    for (var j = 0; j < 3; j++){
        makeRandomProd();
    }
    //console.log(prodBox);
};
//-=-=-=-=-draw the first three images and log that they were viewed:
prodPicA.src = allProducts[prodBox[0]].filepath;
allProducts[prodBox[0]].views +=1;
prodPicB.src = allProducts[prodBox[1]].filepath;
allProducts[prodBox[1]].views +=1;
prodPicC.src = allProducts[prodBox[2]].filepath;
allProducts[prodBox[2]].views +=1;

//-=-=-=-=-draw three new images and log that each was viewed:
function letsGo(){
    if (clickCount < 25){
        newProds();
        prodPicA.src = allProducts[prodBox[0]].filepath;
        allProducts[prodBox[0]].views +=1;
        prodPicB.src = allProducts[prodBox[1]].filepath;
        allProducts[prodBox[1]].views +=1;
        prodPicC.src = allProducts[prodBox[2]].filepath;
        allProducts[prodBox[2]].views +=1;
        clickCount +=1;
    } else {
        //console.table(allProducts);
        images.removeEventListener('click', letsGo);
        prodPicA.removeEventListener('click', tallyVotesA);
        prodPicB.removeEventListener('click', tallyVotesB);
        prodPicC.removeEventListener('click', tallyVotesC);
        countAllVotes();
        //alert(clickCount + ' clicks!');
        calcPercentage();
        console.table(allProducts);
        localStorage.setItem('allProducts', JSON.stringify(allProducts));
        return makeChart(); 
        //window.location.href = 'chart.html';
    };
};
    
//-=-=-=-=-=-=-Perhaps my only well-named function, this tallies votes.
function tallyVotesA(){allProducts[prodBox[0]].clicks +=1;};
function tallyVotesB(){allProducts[prodBox[1]].clicks +=1;};
function tallyVotesC(){allProducts[prodBox[2]].clicks +=1;};
//add function to each of these lines ^^^ to update local storage
//then add function to check if local storage exists and/or set it up
//figure out how to store an array of objects instead of coding this whole god damn thing

function checkLocalStorage(){
    if (!localStorage.allProducts){
        localStorage.setItem('allProducts', JSON.stringify(allProducts));
    } else {
        allProducts = JSON.parse(localStorage.getItem('allProducts'));
    };
};

//-=-=-=-=-=-=-fills arrays for chart
function countAllVotes(){
    for (var i = 0; i < allProducts.length; i++){
        votes[i] = allProducts[i].clicks;
        crap[i] = allProducts[i].name;
    }
};
//-=-=-=-=-=- hey let's store that same data locally
function testy (){
    var tester = ['a', 'b', 4];
    localStorage.setItem("testkey", JSON.stringify(tester));
    var test = JSON.parse(localStorage.getItem("testkey"));
    alert(test);
};
//spent 5 minutes figuring out what stumped me for 2 hours last night.  sleep is a wonderful thing.

    

//-=-=-=-=-test function
function showVotes(){
    for (var i = 0; i < allProducts.length; i++){
        console.log('Product: ' + crap[i] + ' Votes: ' + votes[i]);
    }
};
function calcPercentage(){
    for (var i = 0; i < allProducts.length; i++){
        allProducts[i].percentage = allProducts[i].clicks / allProducts[i].views;
    };
};
//-=-=-=-=-=----test function
function doshit(){
    if (localStorage.getItem("bill")){
        console.log('bill exists');
        var ted = parseInt(localStorage.getItem("bill"));
        console.log('bill: ' + localStorage.getItem("bill"));
        console.log(ted);
        ted +=1;
        localStorage.setItem("bill", ted);
    } else {
        localStorage.setItem("bill", "0");
    }
};
//-=-=-=-=-=-=-=-test function

//if local storage exists else loop through allproducts and newproduct

//product.all = json.parse(localstorage.busmall)