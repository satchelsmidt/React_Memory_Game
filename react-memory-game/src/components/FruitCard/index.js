import React from 'react';
import "./style.css";

function FruitCard(props) {
    return (
        
        <div className="card" onClick={()=> props.cardClick(props.id)}>
            <div className="img-container">
                <img src={props.image} alt={props.name}/>
            </div>
            {/* <h5>{props.name}</h5> */}
        </div>
    )
}

export default FruitCard;