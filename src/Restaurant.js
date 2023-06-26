import React from "react";
import Order from "./Order";

function Restaurant() {


  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul style={{listStyle:"none"}}>
        <Order orderType="Pizzas"/>
        <Order orderType="Salads"/>
        <Order orderType="Chocolate cake"/>
      </ul>
    </div>
  );
}

export default Restaurant;
