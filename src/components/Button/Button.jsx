import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.scss";
export const Button = (props) => {
  return (
    <button
      onClick={
        props.onClick
          ? () => {
              props.onClick();
            }
          : null
      }
      className="button"
    >
      {props.children}
    </button>
  );
};
export const OutlineButton = (props) => {
  return (
    <button
      onClick={
        props.onClick
          ? () => {
              props.onClick();
            }
          : null
      }
      className={`button-outline ${props.className}`}
    >
      {props.children}
    </button>
  );
};
