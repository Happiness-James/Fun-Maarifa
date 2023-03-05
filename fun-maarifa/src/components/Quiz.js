import React, { useState, useEffect } from "react";
import "../Quiz.css"
import Questions from './Questions';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

function Quiz() {
    const [data, setData] = useState([])
    const [status, setStatus] = useState("active")
    const [answeredQns, setAnsweredQns] = useState({})
    const [score, setScore] = useState('');

    let currentLocation = useLocation();
    console.log(currentLocation.state.game);

    const gameObj = currentLocation.state.game;

    useEffect(() => {
        fetch(`http://localhost:9294/game/${gameObj.id}`)
            .then(r => r.json())
            .then((res) => setData(res))
    }, [])

    // Listen to Game status change
    const navigate = useNavigate();
    useEffect(() => {
        // Redirect to /games after this game is deleted
        console.log(status)
        if (status === "deleted") {
            navigate("/games")
        }
    }, [status])

    const deleteQuiz = () => {
        alert("Delete successfully")
        fetch(`http://localhost:9294/game/${gameObj.id}`, { method: 'DELETE' })
            .then(r => r.json())
            .then(() => setStatus("deleted"))
    }

    const checkResults = () => {
        let correctAnswersCounter = 0
        Object.entries(answeredQns).forEach((val) => {
            if (val[1].endsWith('true')) {
                correctAnswersCounter += 1
            }
        })
        const scorePercent = ((correctAnswersCounter/data.questions.length) * 100).toFixed(2);
        setScore(scorePercent)
    }

    return (
        <>
            <div key={gameObj.id}>
                <Questions
                    answeredQns={answeredQns}
                    questions={data}
                />
            
                <div className="quiz-btn">
                    {/* <button className="btn btn-primary" onClick={deleteQuiz}>Delete</button><br/><br/> */}
                    <br />
                    <button className="btn btn-primary" onClick={checkResults}>Submit</button><br />
                </div>
                <div className="score">
                    You scored: 
                   {score}
                </div>
            </div>
        </>
    )
}

export default Quiz;
