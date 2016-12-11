/* 101 JS CHEAT SHEET
   --------
   1) BIND, CALL & APPLY
   2) FUNCTIONAL PROGRAMMING
-------------------*/

var person = {
  firstname: 'Charlie Storey',
  lastname: 'Storey',
  getFullName: function(){
    return this.firstname + ' ' + this.lastname;
  }
};


//2 functions below - 'this' will point to global as that is its next pointer up the
//scope

var logName = function(){
    console.log('FullName' + this.getFullName());
};

var logItWithArgs = function(area,town){
    console.log('FullName is ' + this.getFullName());
    console.log('Arg 1 is ' + area );
    console.log('Arg 2 is ' + town);
};



/* BIND   <!-- Creates a copy
=======*/
//Creates a copy of the function binding the 'this' context to the object in the parenthesis

var logPersonName = logName.bind(person);

var LogNameOnTheFly = function(){
  console.log('Fullname' + this.getFullName());
}.bind(person);


/* CALL  <!--- Executes it
=======*/
//Binds the context of this to the parameter and accepts arguments to calling
//function in ...parameters

logItWithArgs.call(person, 'England', 'Bexley');


/* APPLY  <!--- Executes it
=======*/
//Binds the context of this to the parameter and accepts arguments to calling
//function only with an array

logItWithArgs.apply(person, ['England', 'Bexley']);

//Invoke apply with an IIFE on the fly
(function(sex,title){
  console.log('Name is ' + this.getFullName());
  console.log('Gender : ' + sex);
  console.log('Ttitle : ' + title);
}).apply(person, ['Male', 'Mr']);


/* EXAMPLES
==========*/

/* 1. Function borrowing using apply  --
*/
var personObjectWithoutFunction = {
  firstname: 'Roger',
  lastname: 'McNellie'
};

//Call person.getFullName() function and apply the 'this' context to personObjectWithoutFunction
console.log(person.getFullName.apply(personObjectWithoutFunction));

/* 2. Function currying using bind --
*/

function multiply(a,b){
  return a*b;
}

//Create new function prefilling first argument 'a' with number 2
var mulitplyByTwo = multiply.bind(this,2);
console.log(mulitplyByTwo(5)); //10
console.log(mulitplyByTwo(10)); //20
console.log(mulitplyByTwo(2)); //2


/* --------------------------------------------------------------------------*/

/* FUNCTIONAL PROGRAMMING
========================*/

var array1 = [1,2,3,4,5,6,7,8,9,10];
var names = ["ChaRlie", "roBBie", "sALLY"];

//Basic map function that takes an array and applies 2nd arg function to each element
//returning new array
//----------------------------------------------------------

function mapForEach(arr,fn){
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}

//--------------------------------------------------------

//example of map for each being used with numver operation
var arrayTimes2 = mapForEach(array1, function(num){
  return num * 100;
});

//example of mapforeachh being used with string operation
var namesCleaned = mapForEach(names, function(name){
    var cleanedName = name.toLowerCase();
    return cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);
});

console.log(namesCleaned);

//Being a clever bollocks and adding the operaton to the String prototype
String.prototype.cleanThatName = function(){
  var x = this.toLowerCase();
  return x.charAt(0).toUpperCase() + x.slice(1);
};

var cleanNamesWithPrototype = mapForEach(names, function(name){
  return name.cleanThatName();
});

console.log(cleanNamesWithPrototype);

/*
Using the bind to prefill function arguments on the for each
*/

var checkAgainst = function(limiter,item){
   return item % limiter === 0;
};

var arrayEven = mapForEach(array1, checkAgainst.bind(this,2));

console.log(arrayEven);

/*
Using the bind to prefill function arguments for a more consice call than arrayEvem
above.
*/

var checkAgainstSimple = function(limiter){
  return function(limiter,item){
    return item > limiter;
  }.bind(this,limiter);
};

var array5 = mapForEach(array1, checkAgainstSimple(2));
console.log(array5);

/* --------------------------------------------------------------------------*/
