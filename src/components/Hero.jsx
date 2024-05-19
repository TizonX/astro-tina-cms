import React from 'react';
import { tinaField } from 'tinacms/dist/react';

const Hero = ({ data }) => {
  return (
    <section>
      <h2 data-tina-field={tinaField(data, 'heading')}>{data.heading}</h2>
    </section>
  );
};

export default Hero;
