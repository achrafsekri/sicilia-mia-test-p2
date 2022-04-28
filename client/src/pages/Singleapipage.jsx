import React from "react";
import "../styles/singleapipage.css";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";

export default function Singleapipage() {
  let { name } = useParams();
  let data = localStorage.getItem("apidata");
  let filtering = JSON.parse(data);
  filtering = filtering.filter((one) => one.API === name);
  return (
    <div className="single-container">
      <h1 className="single-title">{filtering[0].API}</h1>
      <p className="single-description">{filtering[0].Description}</p>
      <a href={filtering[0].Link} className="cta">
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
          label={filtering[0].Category}
          sx={{ background: "rgba(16, 85, 141, 0.71)", color: "#ffff" }}
        />
      </div>
    </div>
  );
}
