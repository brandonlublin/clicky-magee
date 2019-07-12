import React from 'react';
import "./scoreboard.css";

function Scoreboard(props) {
    return (
        <div className="nav-item scoreboard">
            Score: {props.score} |
            Highest Score: {props.topScore}
        </div>
    )
}

export default Scoreboard;