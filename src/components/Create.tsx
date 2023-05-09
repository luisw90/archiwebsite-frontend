import React, { useState } from "react";

export const Create = () => {
  const [input, setInput] = useState("");
  return (
    <form
      id="dropdownTarget"
      className="create__container fadeInTarget"
      style={{ opacity: 1 }}
    >
      <label className="create__titles">
        Title:
        <br></br>
        <input className="create__input" />
      </label>
      <label className="create__titles">
        Description:
        <br></br>
        <input className="create__input" />
      </label>
      <label className="create__titles">
        Breed:
        <br></br>
        <input className="create__input" />
      </label>
      <button className="create__button" type="submit">
        Add
      </button>
    </form>
  );
};
