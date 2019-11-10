import React from "react";
import "./style.css"

function Title(props) {
    return (


        <nav className="nav navbar-expand-lg">

            <div className="display">
                <h1 className="title">Fruit time</h1>
                <p className="lead">Score: {props.currentScore} </p>
                <p className="lead">Top Score: {props.topScore}</p>
            </div>

            {props.children}

        </nav>
    )
}

export default Title;