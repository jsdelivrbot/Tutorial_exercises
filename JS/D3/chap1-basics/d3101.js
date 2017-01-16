/* SECTION 1 - 101 using selectors
===========*/

//select all divs and apply styling
d3.select('#section-1').selectAll('div').style('background-color', 'lightblue');

//select all divs and apply accessor function to css style
d3.select('#section-1').selectAll('div')
  .style('background-color', function(d,i){
    return ( i % 2 === 0 ) ? 'lightblue' : 'lightgray';
  });

//select and apply accessor to 2 different CSS styles
d3.select('#section-1').selectAll('div')
  .style('width', function(d,i){
    return (10 + 10 * i) + 'px'
  })
  .style('background-color', function(d,i){
    return (i % 2 === 0 ) ? 'lightblue' : 'lightgray';
  });

//Same as above but passing style props as object rather than chaining
d3.select('#section-1').selectAll('div').style(
  {
    'width': function(d,i){
      return ( 10 + 10 * i ) + 'px';
    },
    'background-color': function(d,i){
      return ( i % 2 === 0 ) ? 'lightblue' : 'lightgray';
    }
  });


/* SECTION 2 - 101 data binding
===============================
.data()   = Specifies data to be used in visualization
.enter()  = Returns selector representing new items to be displayed
.exit()   = Returns selector representing items no longer displayed

.data() - does not add new elements if more datum values, it only assigns datum
values to number held in d3 selctors.
-------------
.enter() -
----------*/

//Append datum to each div currently picked up in the selectors
var selector = d3.select('#section-2')
                 .selectAll('div')
                 .data([10,20,30,40]);


// Creation of new elements -----------------------

//Create a selector that creates array of datums but not binded to any elements
var nullSelector = d3.select('#no-divs')
                    .selectAll('div')
                     .data([100,200,300]);

//Will only be called if extra datum has been added ie. [100,200,300,400,500]
var entering = nullSelector.enter();

//Specify visuals for newly appended items
entering.append('div')
        .text(function(d) {
          return d;
        })

// --------------------------------------------------

//Assign dynamic creation of datum to DOM
function render(data){

 //Create array of datums
 var selector = d3.select('#render-button')
                  .selectAll('div')
                  .data(data);

  //Handle the case of entering elements
  var entering = selector.enter();
  entering.append('div')
          .text(function(d){
            return d;
          })

  //Handle the case of existing element updates
  selector.text(function(d){
    return d;
  });

  //Handle the case of exisitng elements removal
  var exiting = selector.exit();
  exiting.remove();

};

//Call render on page load with only three datums rather than 4 assigned to onclick
render([10,20,30]);

console.log(selector);
console.log(nullSelector);
