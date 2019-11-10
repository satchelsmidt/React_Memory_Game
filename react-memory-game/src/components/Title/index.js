import React from "react";
import "./style.css"

function Title(props) {
    return (

        <div>
            <nav className="nav navbar-expand-lg">
                <div className="display">
                    <h1 className="title">Fruit Salad</h1>
                    <h4>Try to click all of the fruits in the bowl, but don't click the same fruit twice!</h4>
                </div>
            </nav>
            <div className="scores">
                <span><p className="lead">Score: {props.currentScore} </p>
                <p className="lead">Top Score: {props.topScore}</p></span>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Title;