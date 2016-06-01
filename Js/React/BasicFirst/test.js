
var app = React.createClass({
     render: function(){
          return(React.createElement("div",null,"Welcome to React Charlie"));
     }
});

React.render(React.createElement(app), document.body);

React.render(
React.DOM.h1(null, "Hello world!"),
document.getElementById("app")
);
