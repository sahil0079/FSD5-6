import React from "react";
import './Counter.css'

class Counter extends React.Component {
    constructor() {
        super()
        console.log('constructor is called')
        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this)
    }
    // increment = () => {
    //     // console.log(this.state.count)
    //     //never update the state directly
    //     // this.state.count = this.state.count + 1
    //     this.setState({ count: this.state.count + 1 })
    //     //it triggers re-render
    // }        console.log(this.state.count)

    increment() {
        // console.log(this)

        this.setState({ count: this.state.count + 1 })

    }
    // static getDerivedStateFromProps() {
    //     console.log('getDerivedStateFromProps')
    // }
    componentDidMount() {
        console.log('component did mount called')
        console.log('=========================================>')
    }
    componentDidUpdate() {
        console.log('component did update called')
        console.log('=========================================>')
    }

    componentWillUnmount() {
        console.log('component will unmount is called')


    }
    render() {
        console.log('render method called')

        return (
            <div className="counter">
                <h1>Counter: {this.state.count} </h1>
                <button onClick={this.increment} >increment</button>
            </div>
        )
    }
}

export default Counter