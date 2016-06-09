var React = require('/react');

var Prompt = React.createClass({
     render:function(){
          return (
               <div className="jumbotron col-sm-8 col-sm-offset-2 text-center" style={transparentBg}>
                    <h1>{this.props.route.header}</h1>
                    <div className="col-sm-12">
                         <form onSubmit={this.onSubmitUser}>
                              <div className="form-group">
                                   <input
                                    className="form-control"
                                    placeholder="GitHub username"
                                    onChange={this.onUpdateUser}
                                    value={this.state.username}
                                    type="text" />
                              </div>
                              <div className="form-group col-sm-4 col-sm-offset-4">
                                   <button
                                    className="btn btn-block btn-success"
                                    type="submit" > Continue
                                    </button>
                              </div>
                         </form>
                    </div>
               </div>
          )
     }
});

module.exports = Prompt;
