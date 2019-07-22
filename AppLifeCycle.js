import React, { Component } from 'react';
import Child from './ChildLifeCycle.js';
import './App.css';

class App extends Component {
  constructor(props)  {
    super(props)
    this.state = {
      name:'react'
    }
    this.funclick =this.funclick.bind(this);
  }
    funclick()  {
      this.setState ({
                namee:this.state.name='react-js'
                    })
    }

  render() {
    console.log('render');
    return (
      <div>
         
      <button onClick ={this.funclick}>Click here</button>
  
      <Child myname={this.state.name} > </Child>
      </div>
    );
  }
}

export default App;
