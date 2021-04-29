import React from 'react';
// import PropTypes from 'prop-types';

import './StoreCatCard.scss';

const StoreCatCard = ({cat}) => {
  console.log(cat);

  const {name, img} = cat;
  const other_image = 'stores_categories/white_1.jpg'
  const imgRoute = `assets/img/${img}`;

  const handleClick = (e) => {
    console.log('hello');
  }

  const handleHover = (e) => {
    e.target.style='cursor: pointer';
  }

  const altText = `${name} icon`;
  return (
    <div className="container card-store-cat" onClick={handleClick} onMouseOver={handleHover}>
      <img src={imgRoute} alt={altText} className="img card-store-cat"/>
      <div className="name card-store-cat">
        {name}
      </div>

    </div>
  );
};

// StoreCatCard.propTypes = {
  
// };

export default StoreCatCard;