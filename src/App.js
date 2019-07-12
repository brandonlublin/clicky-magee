import React, { Component } from 'react';
import GameCard from './components/GameCard';
import Wrapper from './components/Wrapper';
import friends from './gamecards.json';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from "./components/Navbar/Nav";
import Header from './components/Header/Header';
import Scoreboard from './components/Scoreboard/Scoreboard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: friends,
            currentScore: 0,
            topScore: 0,
            winlossmessage: "You Lose! Try again.",
            imgDisplayOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            clicked: []
        }
    }

    shuffle = (arr) => {
        let j, x, i;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    }

    rndDisplayOrder = () => {
        let shuffleCards = this.shuffle(friends)
        let newOrder = []
        for (let i = 0; i < 15; i++) {
            newOrder.push(shuffleCards[i].id)
        }
        this.setState({ imgDisplayOrder: newOrder })
    }

    handleReset = () => {
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            winlossmessage: "",
            clicked: []
        });
        this.handleShuffle();
    };

    handleClick = event => {
        let newClickedImage = [];
        newClickedImage.push(event.target.id)
        this.setState ({
            currentScore: this.state.currentScore + 1,
            winlossmessage: "",
            clicked: newClickedImage
        });
        console.log(this.state.clickedImage);
        
        this.rndDisplayOrder();
    }


    setHighscore = () => {
        if (this.state.currentScore > this.state.topScore) {
            this.setState({
                topScore: this.state.currentScore
            })
        }
    }

    render() {
        return (
        <div>
            <NavBar />
            <Scoreboard
                score={this.state.currentScore}
                topScore={this.state.topScore}
                winlossmessage={this.state.winlossmessage} />
            <Header />
            <Wrapper>
                {this.state.friends.map(friend => (
                    <GameCard
                        image={friend.image}
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        onClick={this.handleClick}
                    />
                ))}
            </Wrapper>
            <Footer />
        </div>
        )
    }
};


export default App;
