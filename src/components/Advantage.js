import React from "react";
import Card from "./Card";

const cards = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/3829/3829679.png",
    title: "Fuel Cost Included",
    content:
      "Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/622/622669.png",
    title: "No Hidden Charges",
    content:
      "Our prices include taxes and insurance.What you see is what you really pay!",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/837/837993.png",
    title: "Flexi Pricing Packages",
    content:
      "One size never fits all! Choose a balance of time and kilometers that works best for you.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
    title: "Go Anywhere",
    content:
      "Our cars have all-India permits. Just remember to pay state tolls and entry taxes.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/62/62512.png",
    title: "24x7 Roadside Assistance",
    content:
      "We have round-the-clock, pan India partners. Help is never far away from you.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/89/89102.png",
    title: "Damage Insurance",
    content:
      "All your bookings include damage insurance! Drive safe, but don’t worry!",
  },
];

const Advantage = () => {
  return (
    <div className='advantages'>
      <h1>THE ZOOMCAR ADVANTAGE</h1>
      <p>
        We simplified car rentals, so you can focus on what's important to you.
      </p>
      <div className='cards'>
        {cards.map(card => (
          <Card {...card} />
        ))}
      </div>
    </div>
  );
};

export default Advantage;
