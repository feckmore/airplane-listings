import { useEffect, useState } from "react";
import axios from 'axios';
import useLocalStorage from './useLocalStorage';

export interface Listing {
  link: string;
  listingid: string;
  title: string;
  imagesource: string;
  price: string;
  regnum: string;
  totaltime: string;
  description: string;
  seller: string;
  location: string;
  lastupdated: string;
}

export const useList = (): Listing[] => {
  const emptyListings: Listing[] = [];
  const [listings, setListings] = useLocalStorage("currentList", emptyListings);

  useEffect(() => {
    if (!listings || listings.length === 0){
      axios.get('/airplane-listings/planes.json')
      .then(res => {
        const data = res.data as Listing[];
        console.log('retrieved listings from json');
        setListings(data);
      })
      .catch(err => console.log(err));
      }
  }, [])

  return listings;
};
