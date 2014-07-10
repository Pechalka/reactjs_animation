/** @jsx React.DOM */
var React = require('react/addons'); 
var	ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Page1 = React.createClass({
    render : function(){
        return <div key='page1' id="page1" className="page">
            <h1>page1</h1>
        </div>
    }
});

var Page2 = React.createClass({
    render : function(){
        return <div key='page2' id="page2" className="page">
            <h1>page2</h1>
        </div>
    }
});
var Page3 = React.createClass({
    render : function(){
        return <div key='page3' id="page3" className="page">
            <h1>page3</h1>
        </div>
    }
});

var findComponent = function(id){
    if (id == 'page1') return <Page1 key={id}/>;
    if (id == 'page2') return <Page2 key={id}/>;
    if (id == 'page3') return <Page3 key={id}/>;
    
    return null;
}
var getDefaultPage = function(){
    return <Page1 key='page1' />
}

var App = React.createClass({
    getInitialState : function(){
        return { content : getDefaultPage(), transition : 'left' }
    },
    redirecTo : function(pageId){
        this.setState({ content : findComponent(pageId) })
        return false;
    },
    transitionChange : function(e){
        this.setState({ transition : e.target.value })
    },
    render : function(){
    
        return <div>
            <div id="menu">
                <a onClick={this.redirecTo.bind(this, 'page1')} href>page1</a>
                <a onClick={this.redirecTo.bind(this, 'page2')} href>page2</a>
                <a onClick={this.redirecTo.bind(this, 'page3')} href>page3</a>
                <select onChange={this.transitionChange} value={this.state.transition}>
                    <option value="left">left</option>
                    <option value="rigth">rigth</option> 
                    <option value="fade">fade</option> 
                </select>
            </div>
            <div id="view-port">
             <ReactCSSTransitionGroup transitionLeave={true} transitionName={this.state.transition}>
          {this.state.content}
        </ReactCSSTransitionGroup>
            </div>
        </div>
    }
}) 

App.start = function () {
    React.renderComponent(<App/>, document.getElementById('app'));
};

module.exports = window.App = App;
