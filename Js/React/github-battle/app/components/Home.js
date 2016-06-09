var React = require('react');
var transparentBg = require('../styles').transparentBg;

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
     render: function(){
          return(
               <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                    <h1> BitBrains charts </h1>
                    <p className='lead'>Compare BTC to GBP & USD : Current & Historical</p>
                    <Link to='/playerOne'>
                         <button type="button" className="btn btn-lg btn-success">Get Started</button>
                    </Link>

               </div>
          )
     }
});

module.exports = Home;

/*
Whenever someone clicks on the link component they will be taken to whatever route
is
*/
