import React from "react";
import GameCard from "./GameCard";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";


function Games() {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("http://localhost:9294/game")
            .then(r => r.json())
            .then(data => setGames(data))

    }, [])

    const allgames = games.map((gameObj) => {
        return (

            <div className="col-3">
                <GameCard
                    key={gameObj.id}
                    game={gameObj}
                />
            </div>
        )
    })

    return (
        <>
            <Navbar/>
            <div className="row">
                {allgames}
            </div>
        </>
    )
}
export default Games;