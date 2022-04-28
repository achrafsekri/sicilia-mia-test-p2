import React from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
    let route=useLocation();
  return (
    <div className="sidebar">
      <div className="search"><Searchbar /></div>
          <ul>
                <li className={route.pathname==="/"&&"activee"} key='0'>
                    <Link className="Link" to="/" >
                        
                        <span className="item">Dashboard</span>
                    </Link>
                </li >
                <li className={route.pathname==="/apis"&&"activee"} key='1'>
                    <Link className="Link" to="/apis" >
                        
                        <span className="item">APIs</span>
                    </Link>
                </li>
                <li className={route.pathname==="/test"&&"activee"} key='2'>
                    <Link className="Link" to="/test">
                        
                        <span className="item">Test</span>
                    </Link>
                </li>
            </ul>
        
    </div>
  );
}
