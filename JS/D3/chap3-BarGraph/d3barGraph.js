

//Test data
var data = [55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85,
101, 95, 105, 114, 150, 180, 210, 125, 100, 71,
75, 72, 67];

//Bar width and padding
var barWidth = 15, barPadding = 3;

//Scale the height of the bar graph based on the maximum value in data array
var maxValue = d3.max(data);

 //Select and append inner 'g' to newly appended SVG in #graph section
 var mainGroup = d3.select('#graph')
     .append('svg')
     .attr({ width: 1000, height: 250 })
     .append('g');

//Define X horizontal axis
function xloc(d,i){
  return i * ( barWidth + barPadding );
}

//Define Y vertical / height axis
function yloc(d){
  return maxValue - d;
}

//push svg bar image to required location
function translator(d,i){
  return 'translate(' + xloc(d,i) + ',' + yloc(d) + ')';
}

//Generate visuals from the data
mainGroup.selectAll('rect')
     .data(data)
     .enter()
     .append('rect')
     .attr({
       fill: 'steelblue',
       transform: translator,
       width: barWidth,
       height: function(d){
         return d;
       }
     });
