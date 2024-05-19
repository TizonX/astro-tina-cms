import React from 'react';
import { tinaField } from 'tinacms/dist/react';

const Features = ({ data }) => {
  return (
    <section>
      <h2 data-tina-field={tinaField(data, 'heading')}>{data.heading}</h2>
      <button data-tina-field={tinaField(data, 'buttonText')}>
        {data.buttonText}
      </button>
    </section>
  );
};

export default Features;
