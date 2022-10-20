import React, { useState } from "react";
import PropTypes from "prop-types";
function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(evt) {
    evt.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input value={value} onChange={(evt) => setValue(evt.target.value)} />
      <button type="submit">Add todo</button>
    </form>
  );
}
AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
