import React from 'react';
import response from '../utils/topcities';
import TopCity from '../components/TopCity';


function Top() {
  return (
    <div className='m-0 p-2'>
      <h1 className='p-2 text-center'>Top Spots</h1>
      <p className='px-2 text-center'>Places you must visit!</p>
        <div className='row m-0 p-0'>
          {response.searchResults.map((city) => (
            <TopCity key={city.listing.id} city={city} />
          ))}
        </div> 
    </div>
  )
}

export default Top;
