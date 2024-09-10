import React from 'react';

function Image({ imageUrl }) {
  return <img src={imageUrl} alt="Product" style={{ width: '100%' }} />;
}

export default Image;
