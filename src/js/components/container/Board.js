import React, { Component } from "react"
import './app.scss';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            nextPlayer: 'X',
            winner: undefined,
            gameOver: false,
            currentPlayer: ''
        }
    }

    handleClick = (event) => {
        if (this.state.gameOver) return false;
        const _game = this.state.game;
        _game[event.target.id] = this.state.nextPlayer;
        const _nextPlayer = this.state.nextPlayer == 'X' ? 'O' : 'X';
        const _currentPlayer = this.state.nextPlayer;
        let _winner = this.checkForWinner(this.state.nextPlayer) ? this.state.nextPlayer : undefined;
        let _gameOver = _winner ? true : false;
        _gameOver = this.checkForTie() ? true : null;
        _winner = this.checkForTie() ? 'Tie' : _winner;
        this.setState({ game: _game, nextPlayer: _nextPlayer, winner: _winner, gameOver: _gameOver, currentPlayer: _currentPlayer });

    }

    checkValue = (val, a, b, c, arr) => {
        if (arr[a] == arr[b] && arr[b] == arr[c] && arr[c] == val) return true;
        return false;
    }

    checkForWinner = (value, arr) => {
        const game = arr ? arr : this.state.game;

        if (this.checkValue(value, 1, 2, 3, game)) {
            return true;
        }

        if (this.checkValue(value, 1, 5, 9, game)) {
            return true;
        }
        if (this.checkValue(value, 1, 4, 7, game)) {
            return true;
        }
        if (this.checkValue(value, 3, 6, 9, game)) {
            return true;
        }
        if (this.checkValue(value, 2, 5, 8, game)) {
            return true;
        }
        if (this.checkValue(value, 3, 5, 7, game)) {
            return true;
        }
        if (this.checkValue(value, 4, 5, 6, game)) {
            return true;
        }
        if (this.checkValue(value, 7, 8, 9, game)) {
            return true;
        }

        // let _prevIndex = -1;
        // let diff1 = -1;
        // let diff2 = -1;
        // _game.every((element, index) => {
        //     if (element === value) {

        //         if (_prevIndex != -1) {
        //             diff1 = diff2;
        //             diff2 = index - _prevIndex;                    
        //         }
        //         _prevIndex = index;

        //     }
        // });
        // console.log(diff1, diff2);
        // if (diff1 === diff2 && diff1 != -1) {
        //     return true;
        // }

        return false;
    }

    getButtonValue = (id) => {
        return this.state.game[id];
    }

    checkUndefined(count, item) {
        if (item === undefined) (count = count + 1)
        return count;
    }

    checkForTie = () => {
        const cntOfUndefined = this.countOfUndefined();
        if (this.countOfUndefined < 2) return true;
        if (cntOfUndefined == 2) {
            const checkGame = [...this.state.game];
            const indexOfUndefined = checkGame.indexOf(undefined, 1);
            checkGame[indexOfUndefined] = 'X';
            let winner = this.checkForWinner('X', checkGame);
            if (winner) return false;
            checkGame[indexOfUndefined] = 'O';
            winner = this.checkForWinner('O', checkGame);
            if (winner) return false;
            console.log('winner :', winner);
            return true;
        }

        return false;
    }

    countOfUndefined = () => {
        const game = this.state.game;
        const cnt = game.reduce(this.checkUndefined, 0);
        return cnt;
    }

    resetGame = () => {
        this.setState({
            game: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            winner: undefined, gameOver: false, currentPlayer: ''
        })
    }
    render() {

        return (
            <div className="row">
                <div className="col-sm">
                    <div className="row">
                        <span><button onClick={() => { this.resetGame() }}>Reset</button></span>
                    </div>
                    <div className="row">
                        <span>Winner = {this.state.winner}</span>
                    </div><div className="row">
                        <span>Next Player = </span><span id="winner">{this.state.nextPlayer}</span>
                    </div>
                    <div className="row">
                        <button className="square" id="1" key="1" onClick={(e) => this.handleClick(e)}>{this.getButtonValue(1)}</button>
                        <button className="square" id="2" key="2" onClick={(e) => this.handleClick(e)}>{this.getButtonValue(2)}</button>
                        <button className="square" id="3" key="3" onClick={(e) => this.handleClick(e)}>{this.getButtonValue(3)}</button>
                    </div>
                    <div className="row">
                        <button className="square" id="4" key="4" onClick={(e) => this.handleClick(e)}>{this.getButtonValue(4)}</button>
                        <button className="square" id="5" key="5" onClick={(e) => this.handleClick(e)}>{this.getButtonValue(5)}</button>
                        <button className="square" id="6" key="6" onClick={(e) => this.handleClick(e)}>{this.getButtonValue(6)}</button>
                    </div>
                    <div className="row">
                        <button className="square" id="7" key="7" onClick={(e) => this.handleClick(e)}>{this.getButtonValue(7)}</button>
                        <button className="square" id="8" key="8" onClick={(e) => this.handleClick(e)}>{this.getButtonValue(8)}</button>
                        <button className="square" id="9" key="9" onClick={(e) => this.handleClick(e)}>{this.getButtonValue(9)}</button>
                    </div>
                </div>
                <div className="col-sm">
                    <ul>
                        {this.state.game.map((item, index) => {
                            if (item) {
                                return <li>{item} at {index}</li>
                            }
                        })}
                    </ul>
                </div>
            </div >
        )
    }
}

export default Board;