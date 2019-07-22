import React, { Component } from 'react';
class Child extends Component {
componentWillMount()
{
    console.log('component will Mount');
}
componentDidMount()
{
  console.log('component did mount');
}
componentWillReceiveProps(newProps)
 {    
        console.log('Component WILL RECIEVE PROPS');
}
shouldComponentUpdate(newProps,newState)
{
  console.log('should component update');
  return true;
} 
componentWillUpdate(nextProps,nextState)
{
    console.log('component will update');
}
componentDidUpdate(prevProps,prevState)
{
  console.log('component did update');
}
  render() {
    console.log('child render');
    return (
      <div>
         {this.props.myname}
      </div>
    );
  }
}

export default Child;
