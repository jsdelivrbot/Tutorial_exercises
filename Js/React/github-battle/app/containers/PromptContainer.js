var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({

     contextTypes: {
          router: React.PropTypes.object.isRequired
     },

     getInitialState: function(){
          return {
               username: ''
          }
     },

     onUpdateUser: function(e){
          this.setState({
               username: e.target.value
          })
     },

     handleSubmitUser: function(e){
          e.preventDefault();
          var username = this.state.username;
          this.setState({
               username: ''
          });
          if(this.props.routeParams.playerOne){
               console.log(this.context);
               this.context.router.push({
                    pathanme: '/battle',
                    query: {
                         playerOne: this.props.routeParams.playerOne,
                         playerTwo: this.state.username
                    }
               });
          }else{
               console.log(this.context);
               this.context.router.push('/playerTwo/' + this.state.username);
          }

     },

     render: function(){;
          return (
               <Prompt
                    onSubmitUser={this.handleSubmitUser}
                    onUpdateUser={this.onUpdateUser}
                    header={this.props.route.header}
                    username={this.state.username}

                    />
       )
     }
});

module.exports = PromptContainer;

/*
this.state == checks all of the values held in the getIntitalState object

this.setState == updates a peice of the state object

this.props.routeParams.<?> == checks to see if the route params in the routes is
there

query = this.route.params



*/
