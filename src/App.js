import React from 'react';
import GameCard from './components/GameCard';
import Wrapper from './components/Wrapper';
import friends from './gamecards.json';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer/Footer';
import NavBar from "./components/Navbar/Nav";
import Header from './components/Header/Header'

function App() {
    return (
        <Router>
            <NavBar />
            <Header />
            <Wrapper>
                <GameCard
                    name={friends[0].name}
                    image={friends[0].image}
                    occupation={friends[0].occupation}
                    location={friends[0].location}
                />
                <GameCard
                    name={friends[1].name}
                    image={friends[1].image}
                    occupation={friends[1].occupation}
                    location={friends[1].location}
                />
                <GameCard
                    name={friends[2].name}
                    image={friends[2].image}
                    occupation={friends[2].occupation}
                    location={friends[2].location}
                />
                <GameCard
                    name={friends[3].name}
                    image={friends[3].image}
                    occupation={friends[3].occupation}
                    location={friends[3].location}
                />
                <GameCard
                    name={friends[0].name}
                    image={friends[0].image}
                    occupation={friends[0].occupation}
                    location={friends[0].location}
                />
                <GameCard
                    name={friends[1].name}
                    image={friends[1].image}
                    occupation={friends[1].occupation}
                    location={friends[1].location}
                />
                <GameCard
                    name={friends[2].name}
                    image={friends[2].image}
                    occupation={friends[2].occupation}
                    location={friends[2].location}
                />
                <GameCard
                    name={friends[3].name}
                    image={friends[3].image}
                    occupation={friends[3].occupation}
                    location={friends[3].location}
                />
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default App;
