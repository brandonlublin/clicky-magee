import React from 'react';
import './headerstyle.css'

function Header() {
    return (
    <div className='container'>
        <hr className='my-4'></hr>
        <div className='jumbotron-fluid'>
            <h2 className='display-5 text-center'>Clicky Magee, The Best Match Game of the Century!</h2>
            <p className='lead text-center'>Click on a Landmark to earn points, but don't click a Landmark more than once, or your score will reset!!</p>
            <hr className='my-4'></hr>
        </div>
    </div>
    )
}

export default Header;