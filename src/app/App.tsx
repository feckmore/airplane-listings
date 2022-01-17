import React from 'react';
import './App.css';
import {Listing, useList} from './useListings';
import {Card} from '../card/card';

function App() {
  const listings: Listing[] = useList();
  const cards = listings.map((listing) => 
    <Card listing={listing} />
  );

  return (
    <div className="app">
      {cards}
    </div>
  );
}

export default App;
