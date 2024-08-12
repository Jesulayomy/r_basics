import React from 'react';
import { getDistance } from 'geolib';


function TopCity({ city }) {
  let rating = Number(city.listing.avgRatingLocalized);
  let distance = getDistance(
    {"latitude": city.listing.coordinate.latitude, "longitude": city.listing.coordinate.longitude},
    {"latitude": 6.54703, "longitude": 3.33262}
  ) / 1000;

  return (
    <div className='col-6 col-md-4 col-lg-3 m-0'>
        <div className="card" style={{"width": "18rem"}}>
            <img src={city.listing.contextualPictures[0].picture} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{city.listing.title}</h5>
                <sub
                    className={(rating <= 4.9) 
                        ? "text-danger" 
                        : (rating <= 4.95) ? "text-warning" 
                        : "text-success"
                    }
                >{city.listing.avgRatingA11yLabel}</sub>
                <p
                    className={(distance >= 8000) 
                        ? "text-danger" 
                        : (distance >= 6000) ? "text-warning" 
                        : "text-success"
                    }
                >{distance} Kilometers away</p>
                <p className="card-text">{city.listing.name}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}

export default TopCity;
