import React from "react";

const Task = (props) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: props.done ? "lightgrey" : "#5bb4c4" }}
    >
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">
        {props.description ? "Description: " + props.description : ""}
      </p>
      <p style={{ backgroundColor: props.priority === "High" ? "#FF1111" : props.priority === "Medium" ? "#DD6700" : "#00FF00"}}>{props.priority}</p>
      <div>
      <button onClick={props.markDone} className="doneButton">
        Done
      </button>
      <button className="deleteButton" onClick={props.deleteTask}>
        Delete
      </button>
      </div>
    </div>
  );
};

export default Task;
