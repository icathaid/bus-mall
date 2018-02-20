Product.allProducts = [];
var clickCount = 0;

//var prodPic = document.getElementById=("prodPic");

function Product(name, filepath, clicks, views) {
    this.name = name;
    this.filepath = filepath;
    this.clicks = clicks;
    this.views = views;
    Product.allProducts.push(this);
};


new Product('bag', 'img/bag.jpg', 1,1);
new Product('banana', 'img/banana.jpg', 1,1);
new Product('bathroom', 'img/bathroom.jpg', 1,1);
new Product('boots', 'img/boots.jpg', 1,1);
new Product('breakfast', 'img/breakfast.jpg', 1, 1);
new Product('bubblegum', 'img/bubblegum.jpg', 1, 1);
new Product('chair', 'img/chair.jpg', 1, 1);
new Product('cthulu', 'img/cthulhu.jpg', 1, 1);
new Product('dog-duck', 'img/dog-duck.jpg', 1, 1);
new Product('dragon', 'img/dragon.jpg', 1,1);
new Product('pen', 'img/pen.jpg', 1, 1);
new Product('pet-sweep', 'img/pet-sweep.jpg', 1,1);
new Product ('scissors', 'img/scissors.jpg', 1, 1);
new Product('shark', 'img/shark.jpg', 1,1);
new Product('sweep', 'img/sweep.png', 1,1);
new Product('tauntaun', 'img/tauntaun.jpg', 1, 1);
new Product('unicorn', 'img/unicorn.jpg', 1, 1);
new Product('usb', 'img/usb.gif', 1, 1);
new Product('water-can', 'img/water-can.jpg', 1, 1);
new Product('wine-glass', 'img/wine-glass.jpg', 1, 1);



//for expediency/testing, cliucks points to prodPic.alt and views points to prodPic.title
//randomness is not generated yet, I am manually feeding it an index via the showProd() func

//builder function
function showProd(i){
    prodPic.src = Product.allProducts[i].filepath;
    //prodPic.alt = allProducts[i].clicks;
    //prodPic.title = allProducts[i].views;
    //console.log(prodPic.src);
};

function randomProd(){
    var randomProd = Math.floor(Math.random() * Product.allProducts.length);
    prodPic.src = Product.allProducts[randomProd].filepath;
}
//randomProd();
images.addEventListener('click', drawPage);
//randomProd();

//these variables are confusingly named, but i needed to put the click counter in a separate function to prevent it from logging the initial page load as a click.
//the randomProd() function will probably later have to be put inside another function and I will restructure this then.

function drawPage(){
    randomProd();
    clickCount +=1;
    console.log('clickCount: ' + clickCount);
};

randomProd();