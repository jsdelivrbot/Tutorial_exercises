var React = require('react');
var ReactDOM = require('react-dom');
var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');

$(function(){
  $('#petAppointments').append('<h3 class="text-success">Pet app loaded</h3>');
});

const MainInterface = React.createClass({
  render: function(){
    return(
      <h1> React Component : Pet Wisdom </h1>
    );
  }
})

ReactDOM.render(<MainInterface/>, document.getElementById('petAppointments'));
