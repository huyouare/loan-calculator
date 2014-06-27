$(document).ready(function() {
  $(".origination-fee .slider-handle").text(5 + '%');
});

var data = {
    // labels: ['One', 'Two'],
    labels: ['One'],
    datasets: [
        {
            fillColor: '#00b1ac',
            strokeColor: '#CCC',
            data: []
        },
        {
            fillColor: '#CC2568',
            strokeColor: '#CCC',
            data: []
        }
    ]
};

var options = {
  stacked: true,

  showLabels: true,

//   //Boolean - If we show the scale above the chart data     
//   scaleOverlay : false,
  
//   //Boolean - If we want to override with a hard coded scale
//   scaleOverride : false,
  
//   //** Required if scaleOverride is true **
//   //Number - The number of steps in a hard coded scale
//   scaleSteps : null,
//   //Number - The value jump in the hard coded scale
//   scaleStepWidth : null,
//   //Number - The scale starting value
//   scaleStartValue : null,

//   //String - Colour of the scale line 
//   scaleLineColor : "rgba(0,0,0,.1)",
  
//   //Number - Pixel width of the scale line  
//   scaleLineWidth : 1,

  //Boolean - Whether to show labels on the scale 
  scaleShowLabels : true,

  scaleShowValues: true,
  scaleValuePaddingX: -20,
  scaleValuePaddingY: -50,
  
//   //Interpolated JS string - can access value
//   scaleLabel : "<%=value%>",
  
//   //String - Scale label font declaration for the scale label
//   scaleFontFamily : "'Arial'",
  
  //Number - Scale label font size in pixels  
  scaleFontSize : 16,
  
//   //String - Scale label font weight style  
//   scaleFontStyle : "normal",
  
//   //String - Scale label font colour  
//   scaleFontColor : "#666",
  
//   ///Boolean - Whether grid lines are shown across the chart
//   scaleShowGridLines : true,
  
//   //String - Colour of the grid lines
//   scaleGridLineColor : "rgba(0,0,0,.05)",
  
//   //Number - Width of the grid lines
//   scaleGridLineWidth : 1,

//   //Boolean - If there is a stroke on each bar  
//   barShowStroke : true,
  
//   //Number - Pixel width of the bar stroke  
//   barStrokeWidth : 2,
  
//   //Number - Spacing between each of the X value sets
//   barValueSpacing : 5,
  
//   //Number - Spacing between data sets within X values
//   barDatasetSpacing : 1,
  
//   //Boolean - Whether to animate the chart
//   animation : true,

//   //Number - Number of animation steps
  animationSteps : 60,
  
//   //String - Animation easing effect
  animationEasing : "easeOutExpo",

//   //Function - Fires when the animation is complete
//   onAnimationComplete : null
  
};

//Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx).Bar(data, options);

var loanAmount = 10000;
var loanLength = 5;
var interestRate = 10;
var orginationFee = 5;

var redraw = function() {
  data.datasets[0].data[0] = loanAmount;
  data.datasets[1].data[0] = loanAmount * interestRate/100;
  new Chart(ctx).Bar(data, options);
};

$('#loan-amount').slider({
  formater: function(value) {
    loanAmount = value;
    redraw();
    return '$' + value;
  }
});

$('#loan-length').slider({
  formater: function(value) {
    return value + ' Years';
  }
});

$('#interest-rate').slider({
  formater: function(value) {
    interestRate = value;
    redraw();
    return value + '%';
  }
});

$("#interest-rate").on('slide', function(slideEvt) {
  $("#interest-rate-slider-val").text(slideEvt.value + '%');
});

$('#origination-fee').slider({
  formater: function(value) {
    return value + '%';
  }
});

$("#origination-fee").on('slide', function(slideEvt) {
  $(".origination-fee .slider-handle").text(slideEvt.value + '%');
});

