import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";

const LandingPage = () => {
  // const [msg, setMsg] = useState("");

  // useEffect(() => {
  //   fetchData();
  // });

  // const fetchData = async () => {
  //   fetch("https://trashex.herokuapp.com/")
  //     .then(res => res.text())
  //     .then(res => setMsg(res))
  // };

  return (
    <div className="LandingPage">
      <NavBar />
      <div
        className="text-center"
        style={{
          height: "600px"
        }}
      >
        <h1 className="pt-5">Welcome to The Trash Exchange</h1>
        <img
          src="https://www.bing.com/th?id=OIP.WTDEkmneU4jmfgXnFDP4iAHaH_&pid=Api&rs=1"
          alt="Walle"
          style={{
            objectFit: "fill"
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
