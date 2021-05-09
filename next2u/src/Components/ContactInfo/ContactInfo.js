import React from 'react';
import { withContactInfoEdition } from '../../HOC';

const ContactInfo = () => {
  return (
    <div>
      Datos de contacto
    </div>
  );
};

export default  withContactInfoEdition(ContactInfo);