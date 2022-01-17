import './card.css';
import {Listing} from '../app/useListings';

interface CardProps {
  listing: Listing
}

export const Card = ({listing}: CardProps) =>{
  return (
    <div key={listing.listingid} className='card'>
      <img src={listing.imagesource} alt={listing.title} />
      <h2>{listing.title}</h2>
      <p>{listing.description}</p>
      <h3>{listing.price}</h3>
      <h3>{listing.regnum}</h3>
    </div>
  )
}

export default Card