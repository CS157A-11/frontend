import React, { useState } from "react";
import { formatWithOptions } from "util";

interface Props {
  handleSubmit(val: string): void;
}

const TodoForm: React.FC<Props> = props => {
  const [value, setValue] = useState("");
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!value) return;
    props.handleSubmit(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} style = {{ display: 'flex' }}>
      <input
        type="text"
        className="input"
        style = {{ flex: '10', padding: '5px', fontFamily: 'Open Sans'}}
        placeholder="Add Todo ..."
        value={value}
        onChange={updateValue}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: '1', color: '#4b0082', backgroundColor: '#e6e6fa', fontFamily: 'Open Sans'}}
      />
    </form>
  );
};

export default TodoForm;
