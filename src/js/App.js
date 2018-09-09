import React, { Component } from 'react';
import FormContainer from './components/container/FormContainer';

class App extends React.Component {
  state = {
    counts: 0
  }
  counterPlus = (evt) => {
    this.setState({
      counts: this.state.counts + 1
    })
  }
  render() {
    return (
      <div>
        <FormContainer />
        <h1 onClick={this.counterPlus}>{this.state.counts}</h1>
      </div>
    )
  }
}

export default App;
