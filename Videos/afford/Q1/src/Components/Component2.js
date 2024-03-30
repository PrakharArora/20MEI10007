import React, { useState, useEffect } from "react";
import { getTop10sold } from "../Apihelper";
import "./style.css";

const Component2 = () => {
  const [top10Laptop, setTop10Laptop] = useState([]); // State to store the data from that is coming from  the API

  useEffect(() => {
    getTop10sold()
      .then((data) => {
        console.log(data);
        setTop10Laptop(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [top10Laptop]);

  // Mapping out all the data that is received from json api and rendering the data using html


  return (
    <div className="parentCard">
      {top10Laptop.map((data) => {
        return (
          <div class="card" style={{ width: "20rem", height: "15rem" }}>
            <div class="card-body">
              <h5 class="card-title">ProductName: {data.productName}</h5>
              <p class="card-text">Price: {data.price}</p>
              <p class="card-text">rating: {data.rating}</p>
              <p class="card-text">discount: {data.discount}</p>
              <p class="card-text">availability: {data.availability}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Component2;
