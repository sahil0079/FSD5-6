import { Component } from "react";
import Box from "./board-box";
import * as utils from '../utils/utility'


class Board extends Component {
    constructor(props) {
        super(props)

        //Initialize the component's state

        this.state = {
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        }

    }

    //function when a box is clicked

    handleBoxClicked(index) {
        //creating the copy of the state
        const boxes = this.state.boxes.slice()
        //check for no double clicks
        if (boxes[index] !== null) {
            return
        }
        //get current state of the history
        let history = this.state.history
        //stop the game if board has winning combination
        if (utils.findWinner(boxes)) {
            return
        }

        //stop the game if all boxes are clicked or filled

        if (utils.areAllBoxesClicked(boxes) === true) {
            return
        }

        //Mark the box with either x or o

        boxes[index] = this.state.xIsNext ? 'x' : 'o'


        //add the moves to the history

        history.push(this.state.xIsNext ? 'x' : 'o')




        //update the state with the new data

        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        })


        //handle game restart

    }

    handleBoardRestart() {

        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        })

    }

    render() {

        //get the winner (if there is any winner)

        const winner = utils.findWinner(this.state.boxes)


        //if all the boxes are filled or not

        const isFilled = utils.areAllBoxesClicked(this.state.boxes)

        let status

        if (winner) {
            status = `the winner is ${winner}`
        } else if (!winner && isFilled) {
            status = 'Game Drawn'
        } else {
            status = `its ${this.state.xIsNext ? 'x' : 'o'} turn`
        }


        return (
            <div>
 //board
                <div className="board-wrapper">
                    <div className="board">
                        <h2 className="board-heading">{status}</h2>

                        <div className="board-row">
                            <Box
                                value={this.state.boxes[0]}
                                handleBoxClicked={() => this.handleBoxClicked(0)} />
                            <Box
                                value={this.state.boxes[1]}
                                handleBoxClicked={() => this.handleBoxClicked(1)} />
                            <Box
                                value={this.state.boxes[2]}
                                handleBoxClicked={() => this.handleBoxClicked(2)} />

                        </div>
                        <div className="board-row">
                            <Box
                                value={this.state.boxes[3]}
                                handleBoxClicked={() => this.handleBoxClicked(3)} />
                            <Box
                                value={this.state.boxes[4]}
                                handleBoxClicked={() => this.handleBoxClicked(4)} />
                            <Box
                                value={this.state.boxes[5]}
                                handleBoxClicked={() => this.handleBoxClicked(5)} />

                        </div>
                        <div className="board-row">
                            <Box
                                value={this.state.boxes[6]}
                                handleBoxClicked={() => this.handleBoxClicked(6)} />
                            <Box
                                value={this.state.boxes[7]}
                                handleBoxClicked={() => this.handleBoxClicked(7)} />
                            <Box
                                value={this.state.boxes[8]}
                                handleBoxClicked={() => this.handleBoxClicked(8)} />

                        </div>
                    </div>

                    {/* history of moves */}

                    <ul className="board-historyList">
                        {this.state.history.length == 0 && (
                            <span>No moves to show</span>
                        )}

                        {
                            this.state.history.length !== 0 &&

                            this.state.history.map((move, index) => {

                                return (
                                    <li>
                                        Move {index + 1}: <strong>{move}</strong>
                                    </li>
                                )
                            })

                        }

                    </ul>
                </div>
                {/* button for restart */}
                {winner && (
                    <button
                        className="btn"
                        onClick={this.handleBoardRestart}
                    >Start New Game</button>
                )}
            </div>

        )
    }
}

export default Board