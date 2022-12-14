import React from "react";
import PropTypes from "prop-types";

const CardImage = (props) => (
  <img {...props} className="card-img-top" />
);


const Card = ({ title, text, onClick, children }) => (
  <div className="card" style={{ width: "18rem" }}>
    {children}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary" onClick={onClick}>Go somewhere</a>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export { Card as default, CardImage };