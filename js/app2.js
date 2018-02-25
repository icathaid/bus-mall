var c1 = 'darkKhaki';
var c2 = 'dimGray';
var c3 = 'midnightBlue  ';
var c4 = 'darkSlateGray';
var allProducts = JSON.parse(localStorage.getItem('allProducts'));
var crap = [];
var votes = [];
var rate  = [];
var data = {
    labels: crap,
    datasets: [{
        data: votes,
        label: 'Votes',
        backgroundColor: [c1, c2, c1, c2, c1, c2, c1, c2, c1, c2, c1, c2, c1, c2, c1, c2, c1, c2, c1, c2],
    }]
};
var otherData = {
    labels: crap,
    datasets: [{
        data: rate,
        label: 'Percentage',
        backgroundColor: [c3, c4, c3, c4, c3, c4, c3, c4, c3, c4, c3, c4, c3, c4, c3, c4, c3, c4, c3, c4],
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
              label: '',
          },
          legend: {display: false}, 
          title: {display: true, fontColor: 'tan', text: 'Votes per Product'}
          
        },
      });
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
            title: {display: true, fontColor: 'tan', text: 'Clicks per View'}
        }
    });
};

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