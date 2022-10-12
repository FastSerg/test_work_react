import FormUser from 'component/FormUser/FormUser';
import React from 'react';



class App extends React.Component {

  //   state = {
  //     name: 'Stepan', age: 25, isState: false
  //   }

  //   handleChange = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     name: 'Mykola', age: 30, isState: !this.state.isState
  //   }))
  // }

  render() {
    return (
      <>
        {/* {this.state.isState ? <p>Name: {this.state.name}, age: {this.state.age}</p> : null}

        <button onClick={() => this.handleChange()}>{this.state.isState ? 'скрыть' : 'показать'}</button> */}
        <FormUser />
      </>
    )
  }

}

export default App;
