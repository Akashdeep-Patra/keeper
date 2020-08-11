import React from "react";
import "./Card.css";
export default (props) => {
  return (
    <div className="card">
      <h1 className="card-title">{props.title}</h1>
      <p className="card-content">{props.content}</p>
    </div>
  );
};
