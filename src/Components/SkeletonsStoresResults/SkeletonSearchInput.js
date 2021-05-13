import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const SkeletonSearchInput = () => {
  return (
    <div className="skeleton inputName-container">
      
      <form className="inputName-form">
      <BiSearchAlt2 className="search-input icon" />
        
        <input
          className="inputName-text"
          type="text"
        />
        
      </form>
    </div>
  );
};

export default SkeletonSearchInput;