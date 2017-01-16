/* SECTION 1 - Adding rectangles to SVG to create bar graph based on data array
==============================================================================*/

/* Functions / Data used in all examples
--------------------------------------*/

//Test data
var data = [55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85,
101, 95, 105, 114, 150, 180, 210, 125, 100, 71,
75, 72, 67];

//Bar width and padding
var barWidth = 15, barPadding = 3;

//Scale the height of the bar graph based on the maximum value in data array
var maxValue = d3.max(data);

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

//Select and append inner 'g' to newly appended SVG in #graph section
var mainGroup = d3.select('#graph')
    .append('svg')
    .attr({ width: 1000, height: 250 })
    .append('g');

/* --------------------------------*/


/* Basic bar graph example
------------------------*/

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


/* SECTION 2 - Embedding bars as seperate SVG's to add labels to data
====================================================================*/

/* Bar graph with labels added
-----------------------------*/
var container = d3.select('#graph-label')
                  .append('svg')
                  .attr({width: 1000, height: 250})
                  .append('g');

var barGroup = container.selectAll('g')
                 .data(data)
                 .append('g')
                 .attr('transform', translator)

//
barGroup.append('rect')
          .attr({
            fill: 'steelblue',
            width: barWidth,
            height: function(d){
              return d;
            }
          })

var textTranslate = "translate(" + barWidth / 2 + ",0)";

barGroup.append('text')
         .text(function(d){
           return d;
         })
         .attr({
           fill: 'white',
           'alignment-baseline': 'before-edge',
           'text-anchor': 'middle',
           transform: textTranslate
         })
         .style('font', '10px sans-serif');
