var React = require('react');
var ReactDOM = require('react-dom');
var header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({

     getInitialState: function(){
          console.log('In the getIntialState of StreamTweet [1] running');
          return {
               numberOfCharactersIncreasing: null,
               headerText: null
          }
     },

     componentDidMount: function(){
          console.log('Currently in the componentDidMount function of StreamTweet [2] running');
          this.setState({
               numberOfCharactersIncreasing: true,
               headerText: "Latest public photo form Twitter"
          });
          window.snapterest = {
               numberOfReceivedTweets: 1,
               numberOfDisplayedTweets: 1
          }
     }

     //other life cycle methods go here
     render: function(){
          console.log('[StreamTweet] running: in render()');
          return {
               <section>
                    <Header text={this.state.headerText} />
                    <Tweet
                      tweet={this.props.tweet}
                      onImageClick={this.props.onAddTweetToCollection} />
               </section>
          };
     }
});

module.exports = StreamTweet;
