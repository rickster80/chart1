define(["jquery", "chartjs"], function($, Chart){
 // var data = [
 //     {
 //         value: 20,
 //         color:"#637b85"
 //     },
 //     {
 //         value : 30,
 //         color : "#2c9c69"
 //     },
 //     {
 //         value : 40,
 //         color : "#dbba34"
 //     },
 //     {
 //         value : 10,
 //         color : "#c62f29"
 //     }
 //
 // ];
 // var canvas = document.getElementById("myChart");
 // var ctx = canvas.getContext("2d");
 // new Chart(ctx).Doughnut(data);
 var data = {
    labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets : [
        {
            fillColor : "rgba(99,123,133,0.4)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,54,30,81,56,55,40]
        },
        {
            fillColor : "rgba(219,186,52,0.4)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [20,60,42,58,31,21,50]
        },
    ]
}
var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");
new Chart(ctx).Line(data);
})
