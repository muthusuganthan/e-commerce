import React, { useContext } from 'react'
import Usedatacontext from '../store/cardcontext'

const Usecart = () => {
  const context = useContext(Usedatacontext);
  
  if (!context) {
    throw new Error('Usecart must be used within a UserProvider');
  }
  
  return context;
}

export default Usecart