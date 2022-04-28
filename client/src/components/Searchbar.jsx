import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Searchcontext } from "../components/searchcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const { search, setsearch } = useContext(Searchcontext);
  let navigate=useNavigate();
  const handlesearch = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };
  const handlesearchbutton = (e) => {
    let route='/apis/'+search;
    navigate(route)
  };
  
  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "70%",
        height: 35,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search APIs"
        inputProps={{ "aria-label": "Search APIs" }}
        onChange={handlesearch}
      />
      <IconButton sx={{ p: "10px" }} aria-label="search" onClick={handlesearchbutton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
