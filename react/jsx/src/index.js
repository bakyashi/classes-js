import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

function usingJSX (){
   return ( <div>
       <input type="text" placeholder="Enter your name" id="name"/>
    </div>);
}

var App = () => {
    return(
        <div className="App">
           {usingJSX()}
        </div>
    );
}

var rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
