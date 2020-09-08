import React from "react";
import spinner from "../../img/spinner.gif";

export const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: "100px", margin: "auto", display: "block" }}
      alt="spinner gif"
    />
  );
};
