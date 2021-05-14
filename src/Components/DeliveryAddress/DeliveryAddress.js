import React from 'react';
import {withAddressEdition} from '../../HOC';

import './DeliveryAddress.scss';

let testProps = '';

const DeliveryAddress = (test) => {
  
  return (
    <div>
      <DeliveryAddress test={test} />
    </div>
  );
};


export default withAddressEdition(DeliveryAddress);