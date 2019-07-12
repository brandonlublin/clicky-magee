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
            friends,
            currentScore: 0,
            topScore: 0,
            winlossmessage: "You Lose! Try again.",
            cardsIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            clicked: []
        }
    }

    shuffleCharacters(cardsIds) {
        for (let i = this.state.cardsIds.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.state.cardsIds[i], this.state.cardsIds[j]] = [this.state.cardsIds[j], this.state.cardsIds[i]];
        }
        return this.state.cardsIds;
    }

    handleClick = event => {
        let idClick = event.target.id;
        this.state.clicked.push(idClick)
        console.log(this.state.clicked);
        this.shuffleCharacters(event)
        this.setState ({
            currentScore: this.state.currentScore + 1,
            winlossmessage: ""
        });
        console.log(this.state);
        
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
