import React, { Component } from 'react';
import GameCard from './components/GameCard';
import Wrapper from './components/Wrapper';
import friends from './gamecards.json';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from "./components/Navbar/Nav";
import Header from './components/Header/Header';
import Scoreboard from './components/Scoreboard/Scoreboard';

function shuffleCharacters(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            friends,
            currentScore: 0,
            topScore: 0,
            winlossmessage: "You Lose! Try again.",
            clicked: []
        }
    }

    handleShuffle = () => {
        let shuffledFriends = shuffleCharacters(friends);
        this.setState({ friends: shuffledFriends });
    };

    calculateScore = () => {
        const newScore = this.state.currentScore + 1;
        this.setState ({
            currentScore: newScore,
            winlossmessage: ""
        });
    }

    handleClick = (event) => {
    
    }
    render() {
        return (
        <div>
            <NavBar />
            <Scoreboard />
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
