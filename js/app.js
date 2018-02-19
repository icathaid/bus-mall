Product.allProducts = [];

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
new Product('bathroom', 'img/bathroomljpg', 1,1);
new Product('boots', 'img/boots.jpg', 1,1);
new Product('breakfast', 'img/breakfast.jpg', 1, 1);
new Product('bubblegum', 'img/bubblegum.jpg', 1, 1);
new Product('chair', 'img/chair.jpg', 1, 1);
new Product('cthulu', 'img/cthulu.jpg', 1, 1);
new Product('dog-duck', 'dog-duck.jpg', 1, 1);
new Product('dragon', 'img/dragon.jpg', 1,1);
new Product('pen', 'img/pen.jpg', 1, 1);
new Product('pet-sweep', 'img/petsweep.jpg', 1,1);
new Product ('scissors', 'img/scissors.jpg', 1, 1);
new Product('shark', 'img/shark.jpg', 1,1);
new Product('sweep', 'img/sweep.jpg', 1,1);
new Product('tauntaun', 'img/tauntaun.jpg', 1, 1);
new Product('unicorn', 'img/unicorn.jpg', 1, 1);
new Product('usb', 'img/usb.gif', 1, 1);
new Product('water-can', 'img/water-can.jpg', 1, 1);
new Product('wine-glass', 'img/wine-glass.jpg', 1, 1);



//for expediency/testing, cliucks points to prodPic.alt and views points to prodPic.title
//randomness is not generated yet, I am manually feeding it an index via the showProd() func


function showProd(i){
    prodPic.src = Product.allProducts[i].filepath;
    //prodPic.alt = allProducts[i].clicks;
    //prodPic.title = allProducts[i].views;
    //console.log(Product.allProducts[i].filepath);
    console.log(prodPic.src);
};