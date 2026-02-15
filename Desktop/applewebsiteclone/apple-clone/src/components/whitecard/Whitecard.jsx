import React from "react";
import "./Whitecard.css";
import axios from "axios";
import { useState, useEffect } from "react";
function Whitecard(props) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setItem(response.data);
    });
  }, []);
  return (
    <div className="cardrow">
      {item.map((item) => {
        return (
          <div
            className={props.isSmall ? "smallwhitecard" : "white-small-card"}
          >
            {item.image && (
              <div className="image-wrapper">
                <img src={item.image} alt="demo" />
              </div>
            )}

            <div className="inner">
              <h2>{item.title}</h2>
              <p>{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Whitecard;
