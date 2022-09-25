import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Stepan', age: 25, isState: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState((prevState) => ({
      ...prevState,
      name: 'Mykola', age: 30, isState: !this.state.isState
    }))
  }

  render() {
    return (
      <>
        {this.state.isState ? <p>Name: {this.state.name}, age: {this.state.age}</p> : null}

        <button onClick={() => this.handleChange()}>{this.state.isState ? 'скрыть' : 'показать'}</button>
      </>
    )
  }

}

export default App;
