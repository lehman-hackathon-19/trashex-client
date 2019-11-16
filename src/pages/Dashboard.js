import React, {useState, useEffect} from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import "./Dashboard.css";

const Dashboard = () => {
  const [points, setPoints] = useState(0);

  return (
    <div className="Dashboard">
      <NavbarLoggedIn />
      <div className="container text-center pt-3">
        <div className="circle small mx-auto">
          <h1>{points}</h1>
          <p>POINTS</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
