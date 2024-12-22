import React from "react";
import "./OrderList.css";
import d1 from './images/image1.png';

const orders = [
  {
    id: 1,
    name: "3-seat sofa",
    price: "₹ 20,999",
    image: d1,
  },
  {
    id: 2,
    name: "Small table",
    price: "₹ 3,500",
    image: d1,
  },
  {
    id: 3,
    name: "Classic chair",
    price: "₹ 7,599",
    image: d1,
  },
  {
    id: 4,
    name: "4-layer drawer",
    price: "₹ 12,580",
    image: d1,
  },
  {
    id: 5,
    name: "5-layer drawer",
    price: "₹ 12,000",
    image: d1,
  },
];

const OrderList = () => {
  return (
    <div className="order-list">
      {orders.map((order) => (
        <div className="order-item" key={order.id}>
          <img src={order.image} alt={order.name} className="order-image" />
          <div className="order-details">
            <h3>{order.name}</h3>
            <p>{order.price}</p>
          </div>
          <button className="track-button">TRACK</button>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
