"use client"
import { CartProvider } from '@mrvautin/react-shoppingcart';
import React, { ReactNode } from 'react';

type props={
    children:ReactNode;
}

const Provider = ({children}:props) => {
  return (
    <div>
        <CartProvider>{children}</CartProvider>
      
    </div>
  );
}

export default Provider;
