import React, { useState } from 'react';
// import PropTypes from 'prop-types';


// import InfoToShow from '../InfoToShow';

import './Selector.scss';

const Selector = props => {

  const [selection, setSelection] = useState('menu');

  const handleClick = (e, kind) => {
   setSelection(kind);
  }
  return (
    <div className="selector-container">
      <div className="menu-option" onClick={ e=> handleClick(e, 'menu') }>
        Menú
      </div>
      <div className="info-option" onClick={ e=> handleClick(e, 'info') }>
        Info
      </div>
      {/* <div className="info-to-show">
        <InfoToShow />
      </div> */}
    </div>
  );
};

// Selector.propTypes = {
  
// };

export default Selector;