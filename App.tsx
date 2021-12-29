import * as React from 'react'
import StoreProvider from "./src/store"
import Index from './src/Index'


export default function App() {
  return (
    <StoreProvider>
        <Index />
    </StoreProvider>
  );
}

