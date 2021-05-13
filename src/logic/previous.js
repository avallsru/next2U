import React from 'react';

let green = true;
const previous = () => {
  green = !green;
  return green;
};

export default previous;