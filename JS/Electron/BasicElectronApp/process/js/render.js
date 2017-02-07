/******************************************************************************
* MAIN REACT INJECTION
* --------------------
*
*
*******************************************************************************/

//Import app3 modules
var React = require('react');
var ReactDOM = require('react-dom');
var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');

//Import app data
var fs = eRequire('fs');
var loadApts = JSON.parse(fs.readFileSync(dataLocation));

//Import app modules
var Main = require('./Main');


$(function(){
  $('#petAppointments').append('<h3 class="text-success">Pet app loaded</h3>');
});

//Render to the DOM
ReactDOM.render(<Main/>,document.getElementById('petAppointments'));
