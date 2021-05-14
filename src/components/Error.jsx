import React from "react";
import "../assets/styles/components/Error.scss";
import errorImage from "../assets/static/images/error.png";

const Error = () => (
  <div className="error">
    <img className="error-img" src={errorImage} alt="Morty Scared" />
    <span className="error-text">Sorry, an error has occurred.</span>
  </div>
);

export default Error;
