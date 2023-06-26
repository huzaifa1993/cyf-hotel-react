import React, {useState}from "react";
import RestaurantButton from "./data/RestaurantButton";


const Order = ({orderType}) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
