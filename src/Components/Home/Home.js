import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import ticketData from "../../fakeDataTicket/fakeDataTicket.json";
import "./Home.css";
import Tickets from "../Tickets/Tickets";
import ticketPic1 from "../../ticketImages/Image1.png";
import ticketPic2 from "../../ticketImages/Image2.png";
import ticketPic3 from "../../ticketImages/Image3.png";
import ticketPic4 from "../../ticketImages/Image4.png";

const ticketData = [
  {
    id: 1,
    Name: "ONE TIME TICKET",
    Image:  ticketPic1 ,
    Price: "$15",
  },
  {
    id: 2,
    Name: "ONE DAY PASS",
    Image:  ticketPic2 ,
    Price: "$150",
  },
  {
    id: 3,
    Name: "MONTHLY PASS",
    Image:  ticketPic3 ,
    Price: "$350",
  },
  {
    id: 4,
    Name: "ANNUAL PASS",
    Image: ticketPic4 ,
    Price: "$550",
  },
];

const Home = () => {
  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    setTicket(ticketData);
  }, []);
  console.log(ticket);
  return (
    <Container>
      <Row>
        {ticket.map((ticket) => (
          <Col>
            <Tickets ticket={ticket} key={ticket.id}></Tickets>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
