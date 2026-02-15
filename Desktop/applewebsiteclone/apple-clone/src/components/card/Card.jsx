import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function Card(props) {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="card">
      <div className="cardrow">
        {item.map((each) => {
          return (
            <div
              onClick={() => {
                console.log(each.id);
                navigate("/bag");
              }}
              key={each.id}
              className="eachcard"
              style={{
                backgroundColor: each.color,
                color: each.color === "black" ? "white" : "black",
              }}
            >
              <div className="inner">
                <h2>{each.title}</h2>
                <h4>{each.description}</h4>
                <p>{each.priceText}</p>
                <p>{each.price}</p>
              </div>

              <div className="image-wrapper">
                <img src={each.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
