import React, {useState, useEffect} from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import GMap from "../components/GMap";
var Faker = require('faker');

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.requestPickup = this.requestPickup.bind(this);
    this.state = {
      isLoading: false,
    };
  }

  requestPickup() {
    var pre = Faker.address.cityPrefix();
    var suf = Faker.address.citySuffix();
    this.setState({ isLoading: true });
    fetch(`http://localhost:5000/api/pickups/`, {
      method: 'POST',
      body: JSON.stringify({
        "prefix": pre,
        "suffix": suf
      })
    })
    .then(response => response.json())
    .then(data => this.setState({ isLoading: false }));
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="Dashboard">
        <NavbarLoggedIn />
        <GMap />
        <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}className="container text-center t-3">    
          <div style={{width:"200px", marginTop:"20px",height:"40px",border:"4px solid black"}} onClick={() => this.requestPickup()}>
            <p style={{fontSize:"20px"}}>REQUEST PICKUP  </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Request;
