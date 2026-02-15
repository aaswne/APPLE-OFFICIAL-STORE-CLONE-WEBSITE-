import React from "react";
import "./Quick.css";

function Quick() {
  return (
    <div className="quick">
      <h1 className="quick-title">Quick Links</h1>

      <div className="button-row">
        <div className="button"><h3>Find a Store</h3></div>
        <div className="button"><h3>Order Status</h3></div>
        <div className="button"><h3>Shopping Help</h3></div>
        <div className="button"><h3>Returns</h3></div>
        <div className="button"><h3>Your Saves</h3></div>
      </div>
    </div>
  );
}

export default Quick;
