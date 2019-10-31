import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={updateValue}
      />
    </form>
  );
};

export default TodoForm;
