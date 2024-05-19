// src/Testimonial.js
import React from "react";
import "../styles/Testimonial.css";
import { tinaField } from "tinacms/dist/react";

const Testimonial = ({ quote, author, section }) => {
  return (
    <div className="testimonial">
      <p
        className="quote"
        data-tina-field={tinaField(section, "testimonialQuote")}
      >
        “{quote}”
      </p>
      <p
        className="author"
        data-tina-field={tinaField(section, "testimonialAuthor")}
      >
        - {author}
      </p>
    </div>
  );
};

export default Testimonial;
