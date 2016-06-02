var USER_DATA = {
     name: "Charlie Storey",
     username: "charlie301",
     image: "https://cdn0.iconfinder.com/data/icons/profession-vol-1/32/programmer_coder_developer_encoder_engineer_computer_coding-128.png"
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
     render: function(){
          return (
               <img src={this.props.image} style={{height:100,width:100}} />
          )
     }
});

var ProfileLink = React.createClass({
     render: function(){
          return(
               <div>
                    <a href={"https://github.com/" + this.props.username}>
                    {this.props.username}
                    </a>
               </div>
          )
     }
});

var ProfileName = React.createClass({
     render:function(){
          return(
               <div> {this.props.name} </div>
          )
     }
});

var Avatar = React.createClass({
     render: function(){
          return(
               <div>
                    <ProfilePic image={this.props.user.image} />
                    <ProfileName name={this.props.user.name} />
                    <ProfileLink username={this.props.user.username} />
               </div>
          )
     }
});

ReactDOM.render(<Avatar user={USER_DATA}/>, document.getElementById('app'));
