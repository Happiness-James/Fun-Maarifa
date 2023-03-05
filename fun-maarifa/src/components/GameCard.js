import React from "react";
import { Link } from "react-router-dom";


function GameCard(props) {
    return (
        <>
            <div className="card">
                <img src={props.game.image_url} className="card-img-top" alt={props.game.image_url} />
                <div className="card-body">
                    <h2 className="card-title">Title: {props.game.title}</h2>
                    <p className="card-text"><strong className="card-text">Description:</strong> {props.game.description}</p>
                    <Link
                        to={'/quiz'}
                        state={{ game: props.game }}>
                            <button className="btn btn-primary">Play</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default GameCard;