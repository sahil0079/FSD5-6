import React from 'react'
import './App.css'
import Counter from './Counter'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      mount: false
    }

  }

  render() {
    return (
      <div className='app'>
        {
          this.state.mount && <Counter />
        }
        <button onClick={() => this.setState({ mount: true })}>Mount</button>
        <button onClick={() => this.setState({ mount: false })}>Unmount</button>

      </div>
    )
  }
}

export default App