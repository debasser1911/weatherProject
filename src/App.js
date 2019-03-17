import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    respData: [],
  }
  componentDidMount(){
    axios.get('http://localhost:5555').then(response => {
      this.setState({respData:response.data})
      console.log(response.data)
      console.log(this.state.respData)
    });

  }
  

  render() {
    return (
      <div>
{this.state.respData}
</div>

    );
  }
}

export default App;
