import React from 'react';
import {withAddressEdition} from '../../HOC';

import './DeliveryAddress.scss';

const DeliveryAddress = () => {
  return (
    <div>
      Dirección de entrega
    </div>
  );
};

export default withAddressEdition(DeliveryAddress);