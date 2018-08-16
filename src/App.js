import React from 'react'

// const App = props => <h1>Hello</h1>

class App extends React.Component {
  handleClicked = evt => console.log('Clicked')
  render() {
    return (
      <div>
        <h1>Click this red button</h1>
        <button onClick={this.handleClicked}>Click</button>
      </div>
    )
  }
}

export default App
