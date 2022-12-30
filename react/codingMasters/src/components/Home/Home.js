import React from "react";
import './Home.css'
import Topics from "./Topics/Topics";

export default function Home() {

    return (
        <div className="home_container">
            <div className="home_header">
                <h1>
                    Education is the key to unlock the golden door of freedom.
                </h1>
            </div>
            <div className="home_banner">
                <div className="home_banner_left">
                    <p>Learn to code</p>
                    <p>Practice</p>
                    <p>Interview Preparation</p>
                </div>
                <div className="home_banner_right">
                    <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="programmerImage" />
                </div>
            </div>
            <div className="home_topics">
                <Topics />
            </div>
        </div>
    )
}