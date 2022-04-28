import React, { useContext } from "react";
import "../styles/home.css";
import SingleApi from "../components/SingleApi";
import { useState, useEffect } from "react";
import axios from "axios";
import { Searchcontext } from "../components/searchcontext";

export default function Home() {
  const [data, setdata] = useState([]);
  const { search, setsearch } = useContext(Searchcontext);
  const [filteredata, setfiltereddata] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/all-apis`)
      .then((res) => {
        setdata(res.data.entries);
        setfiltereddata(res.data.entries);
        let datastring = JSON.stringify(res.data.entries);
        localStorage.setItem("apidata", datastring);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  useEffect(() => {
    const contain = (str) => {
      return str.indexOf(search) != -1;
    };
    let filtering = data;
    search != ""
      ? (filtering = filtering.filter((one) => contain(one.API)))
      : null;
    setfiltereddata(filtering);
  }, [search]);

  return (
    <div className="container">
      {filteredata.map((data) => (
        <SingleApi
          name={data.API}
          description={data.Description}
          link={data.Link}
          category={data.Category}
        />
      ))}
    </div>
  );
}
