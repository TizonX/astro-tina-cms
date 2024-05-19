import React from "react";
import "../styles/CardComponent.css";
import { tinaField } from "tinacms/dist/react";
const CardComponent = ({ title, description, featue }) => {
  return (
    <div className="card">
      {/* <img src={card.logo} alt="Logo" className="card-logo" /> */}
      <h2 className="card-title" data-tina-field={tinaField(featue, "title")}>
        {title}
      </h2>
      <p
        className="card-description"
        data-tina-field={tinaField(featue, "featureText")}
      >
        {description}
      </p>
    </div>
  );
};

export default CardComponent;
