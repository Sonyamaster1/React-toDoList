import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "./context";
const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};
function TodoItem({ todo, i, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.complited) {
    classes.push("done");
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.complited}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{i}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
