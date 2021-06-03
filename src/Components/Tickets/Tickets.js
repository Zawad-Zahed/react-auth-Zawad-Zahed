import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Tickets = (props) => {
  const { Name, Image, id, Price } = props.ticket;
  //   console.log(id);
  let history = useHistory();
  const handleClick = () => {
    const url = `/destination/${id}`;
    history.push(url);
  };
  console.log(Image);
  return (
    <div className="container p-4 m-2 ">
      {/* <div class="card bg-dark text-white">
  <img class="card-img" src="..." alt="Card image">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div> */}
      <div onClick={handleClick} className=" card bg-dark text-white shadow-2 ">
        <img className="card-img" src={Image} alt="" />
        <div class="card-img-overlay card-body">
          <h5 className="card-text">{Name}</h5>
          <br />
          <br />
          <button className="btn btn-primary rounded"> Buy now</button>
          <br />
          <br />
          <br />
          <br />
          <h3>{Price}</h3>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
