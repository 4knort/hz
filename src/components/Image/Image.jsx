import React, { PropTypes } from 'react';
import * as images from './images';


const Image = ({ image, className }) => (
  <img
    className={className}
    src={images[image]}
    alt={image}
  />
);

Image.propTypes = {
  image: PropTypes.oneOf(Object.keys(images)).isRequired,
  className: PropTypes.string,
};

export default Image;
