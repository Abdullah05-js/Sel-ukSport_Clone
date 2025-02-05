"use client"
import React from 'react';
import "@/componets/MatchesPage/style.css"

const Gol = ({vote}) => {
    return (
        <div >
            <div data-glitch={vote} className="glitch">{vote}</div>
        </div>
    );
}

export default Gol;
