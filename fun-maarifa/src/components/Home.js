import React from "react";
import {useNavigate} from 'react-router-dom';
import "../Home.css"
function Home() {

    const navigate = useNavigate();

    const handleSubmit = event => {
      event.preventDefault();
  
      // 👇️ redirect to /game
      navigate('/games');
    };
    return (
        <>
            <section className="home-page">
                <div className="home-text">
                    <h1 className="h1-text">Welcome to Fun-Maarifa where you learn as you have fun!!!</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <label className="label-text">UserName</label><br />
                        <input className="input" type="text" id="fname" name="fname" required /><br/><br/>
                        <input className="input-button" type="submit" value="Submit" />
                    </form>

                </div>
            </section>
        </>
    )
}
export default Home;