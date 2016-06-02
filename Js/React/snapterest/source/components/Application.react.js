 /** @jsx React.DOM */
var React = require('react');
var Stream = require('./Stream.react');
var Collection = require('./Collection.react');

var Application = React.createClass({

     getInitialState: function(){
          return {
               collectionTweets: {};
          }
     },

     //callback function passed to children
     addTweetCollection: function(id){
          var collectionTweets = this.state.collectionTweets;
          collectionTweets[tweet.id] = tweet;
          this.setState({
               collectionTweets: collectionTweets
          });
     },

     //callback function passed to children
     removeTweetFromCollection: function(tweet){
          var collectionTweets = this.state.collectionTweets;
          delete collectionTweets[tweet.id];
          this.setState({
               collectionTweets:collectionTweets
          });
     },

     //callback function passed to children
     removeAllTweetsFromCollection: function(){
          this.setState({
               collectionTweets: {}
          });
     },

     render: function(){
          return{
               <div className="container-fluid">
                    <div className="row">
                         <div className="col-md-4 text-center">
                              <stream onAddTweetToCollection={this.addTweetCollection} />
                         </div>
                         <div className="col-md-8">
                              <Collection tweets={this.state.collectionTweets}
                                onRemoveTweetFromCollection={this.removeTweetFromCollection}
                                onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
                         </div>
                    </div>
               </div>
          };
     }
});

module.exports = Application;
