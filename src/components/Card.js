import React from "react";


export function Cards(props) {
  return (
    <div className="card">
        <img src={props.coverImg} className="card-image" alt="cover" />
      
      <div className="card-stats">
        <p className="title">{props.title}</p>
        <span className="duration">{props.duration}</span> &nbsp;
        <span>{props.type}</span>
        <span> ⭐{props.rating}</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
