import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, complete, text, id }) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: complete ? "line-through" : "none",
        textDecorationColor: complete ? "green" : "none",
        color: complete ? "green" : "white",
      }}
    >
      {id} - {text}
    </li>
  );
};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    complete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Todo;
