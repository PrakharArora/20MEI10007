import React, { useState, useEffect } from "react";
import { allLaptopData } from "../Apihelper";
import "./style.css";
function Component1() {
  const [data, setLaptopData] = useState([]); // State to store the data from that is coming from  the API

  useEffect(() => {
    allLaptopData("AMZ", "Laptop", 10, 1, 10000)
      .then((data) => {
        console.log(data);
        setLaptopData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map((data) => {
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
}

export default Component1;
