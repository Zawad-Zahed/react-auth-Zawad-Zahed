import React from "react";
import { useHistory } from "react-router-dom";

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
    // <div className="container p-4 m-2 ">
    //   <div onClick={handleClick} className=" card bg-dark text-white ">
    //     <img className="card-img" src={Image} alt="" />
    //     <div class="card-img-overlay card-body">
    //       <h5 className="card-text">{Name}</h5>
    //       <br />
    //       <br />
    //       <button className="btn btn-primary rounded"> Buy now</button>
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <h3>{Price}</h3>
    //       <br />
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="container">
        <div className="row flex  ">
          <div className="col">
            <div className="card text-white row-cols-1  ">
              <img
                src={Image}
                className="card-img row-cols rounded-3"
                alt="..."
              />
              <div className="card-img-overlay p-2 m-2">
                <h2 className="card-title">{Name}</h2>
                <br />
                <button
                  onClick={handleClick}
                  className="btn btn-warning btn-lg rounded-pill"
                >
                  {" "}
                  Buy Ticket{" "}
                </button>

                <br />
                <br />
                <br />
                <h2 className="card-text">{Price}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
