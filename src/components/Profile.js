import React from "react";

export default function Profile() {
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid", marginTop: "10px" }}
          src="https://robohash.org/spider.png?size=200x200"
          alt="pic"
        />
        <h5>Rahatul Islam</h5>
        <h6>Email - rahatul@abc.com</h6>
      </div>
      <h3>Your quotes</h3>
      <blockquote>
        <h6>if it works dont touch it</h6>
      </blockquote>
      <blockquote>
        <h6>if it works dont touch it</h6>
      </blockquote>
    </div>
  );
}
