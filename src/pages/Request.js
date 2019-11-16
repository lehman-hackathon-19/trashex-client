import React, {useState, useEffect} from "react";
import NavbarLoggedIn from "../components/NavbarLoggedIn";

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.requestPickup = this.requestPickup.bind(this);
    this.state = {
      isLoading: false,
    };
  }

  requestPickup() {
    this.setState({ isLoading: true });
    fetch(`http://localhost:5000/api/pickups/`, {
      method: 'POST'
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
        <div className="container text-center pt-3">    
          <div style={{width:"80px", height:"40px",border:"2px solid gray"}} onClick={() => this.requestPickup()}>
            Request Pickup
          </div>
        </div>
      </div>
    );
  }
};

export default Request;
