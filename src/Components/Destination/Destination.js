import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import fakeDataTicket from "../../fakeDataTicket/fakeDataTicket";
import MyMap from "../MyMap/MyMap";
import "./Destination.css";
import imageTicket from "../../ticketImages/ticketLogo.png";

const Destination = () => {
  let { id } = useParams();
  const [location, setLocation] = useState({
    pickTo: "",
    pickFrom: "",
  });
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [press, setPress] = useState(false);
  const [details, setDetails] = useState(fakeDataTicket);
  // console.log(details);
  const ticket = details.find((tck) => tck.id === parseInt(id));
  const { price } = ticket;

  const handlePress = () => {
    setPress(!press);
  };

  const handleBlur = (e) => {
    // debugger;
    // console.log(e.target.name,e.target.value);
    let locationValid = true;
    if (e.target.name === "pickTo") {
      locationValid = /^[a-zA-Z ]+$/.test(e.target.value);
      console.log(locationValid);
      //  console.log(e.target.name,isEmailValid);
    }

    if (e.target.name === "pickFrom") {
      //smart validation  /^([a-z0-9]{8,})$/
      //  const isPasswordValid =/^([a-z0-9]{8,})$/.test(e.target.value)
      const pickValid = /^[a-zA-Z ]+$/.test(e.target.value);
      locationValid = pickValid;
      //    console.log(e.target.name,pickValid);
      console.log(locationValid);
    }
    if (locationValid) {
      const newLocationInfo = { ...location };
      newLocationInfo[e.target.name] = e.target.value;
      setLocation(newLocationInfo);
    }
  };

  return (
    <Container className="container text-color ">
      <Row>
        <Col>
          {!press && (
            <form className="text-white" onSubmit={handlePress}>
              <label htmlFor="pickFrom"> Pick From </label>
              <input
                type="text"
                name="pickFrom"
                onBlur={handleBlur}
                placeholder="Pick From"
                id="pick"
                required
              />
              <br />
              <br />
              <label htmlFor="pickTo"> Pick To </label>
              <input
                type="text"
                name="pickTo"
                onBlur={handleBlur}
                placeholder="Pick to"
                id="pick"
                required
              />
              <br />
              <br />
              <button className="btn btn-light btn-lg">
                <input type="submit" value="search" />
              </button>
            </form>
          )}

          {press && (
            <div className="flex text-white m-2 p-2 justify-content-evenly ">
              <h4>
                {" "}
                From {location.pickFrom}
                <br />
                <br />
                To {location.pickTo}{" "}
              </h4>
              <br />
              <div className="d-flex text-white">
                <img
                  src={imageTicket}
                  height="50px"
                  width="50px"
                  className="img-fluid"
                  alt=""
                />
                <p>Ticket 1 : {price}</p>
              </div>

              <div className="d-flex">
                <img
                  src={imageTicket}
                  height="50px"
                  width="50px"
                  className="img-fluid"
                  alt=""
                />

                <p> Ticket 2 : {price}</p>
              </div>

              <div className="d-flex">
                <img
                  src={imageTicket}
                  height="50px"
                  width="50px"
                  className="img-fluid"
                  alt=""
                />
                <p> Ticket 3 : {price}</p>
              </div>
            </div>
          )}
        </Col>
        <Col>
          <MyMap></MyMap>
        </Col>
      </Row>
    </Container>
  );
};

export default Destination;
