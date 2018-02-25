var chartDrawn = false;
var allProducts = JSON.parse(localStorage.getItem('allProducts'));
var crap = [];
var votes = [];
var rate  = [];
var data = {
    labels: crap,
    datasets: [{
        data: votes,
        label: 'Votes',
        backgroundColor: ['navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red', 'navy', 'red'],
    }]
};
var otherData = {
    labels: crap,
    datasets: [{
        data: rate,
        label: 'Percentage',
        backgroundColor: ['black', 'yellow', 'black', 'yellow', 'black', 'yellow', 'black', 'yellow', 'black', 'yellow', 'black', 'yellow', 'black', 'yellow', 'black', 'yellow', 'black', 'yellow', 'black', 'yellow', 'black', 'yellow', 'black', 'yellow'],
    }]
};
function makeChart(){
    var ctx = document.getElementById('crapChart').getContext('2d');
    crapChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          responsive: false,
          scales: {
              label: 'label?',
              xAxes: [{
                  stacked: true,
                  ticks: {
                      autoskip: false,
                  }
                }]
          },
          legend: {display: false}, 
          title: {display: true, text: 'this is my title'}
        },
      });
      chartDrawn = true;
    }

function makePercentageChart(){
    var ctx = document.getElementById('crapChart2').getContext('2d');
    crapChart2 = new Chart(ctx, {
        type: 'bar',
        data: otherData,
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                    ticks: {autoSkip: false}
                }]
            },
            legend: {display: false},
            title: {display: true, text: 'this is my other title'}
        }
    });
};



//need to fill votes and crap with data from local storage
//will also need to add a variable for views, percentage, etc.
function makeData(){
    for (var i = 0; i < allProducts.length; i++){
        votes.push(allProducts[i].clicks);
        crap.push(allProducts[i].name);
        rate.push(allProducts[i].clicks / allProducts[i].views)
    }
};

makeData();
makeChart();
makePercentageChart();
