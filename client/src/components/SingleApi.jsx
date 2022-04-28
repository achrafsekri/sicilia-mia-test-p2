import React from "react";
import "../styles/singleapi.css";
import Chip from "@mui/material/Chip";

export default function SingleApi(props) {
  return (
    <div className="api-container">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <a href={props.link} className="cta">
        <span className="hover-underline-animation"> Check out this API </span>
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="10"
          viewBox="0 0 46 16"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          ></path>
        </svg>
      </a>
      <div className="category">
        <Chip
          label={props.category}
          sx={{ background: "rgba(16, 85, 141, 0.71)", color: "#ffff" }}
        />
      </div>
    </div>
  );
}
