import { useState } from "react";

const alert = ({
  inputChild,
  setInputChild,
  btnClicked,
  setBtnClicked
}) => {
  const handleClick = () => {
    setBtnClicked(true);
  };
  const handleChange = (event) => {
    if (btnClicked) {
      setBtnClicked(false);
    }
    setInputChild(event.target.value);
  };
  return (
    <>
      <input onChange={handleChange} value={inputChild} />
      <button onClick={handleClick} type="button">
        Click on me
      </button>
    </>
  );
};

export default alert;