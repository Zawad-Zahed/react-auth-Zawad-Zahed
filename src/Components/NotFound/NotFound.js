import React from "react";

const NotFound = () => {
  return (
    <div className="container ">
      <div className="errorText text-center text-danger m-2 p-2 ">
        <h3> Please Go to Home </h3>
        <h5> & </h5>
        <h2>Buy Ticket</h2>
        <br />
        <br />
        <h3>
          After that you can see your{" "}
          <span className="text-primary">Destination</span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
