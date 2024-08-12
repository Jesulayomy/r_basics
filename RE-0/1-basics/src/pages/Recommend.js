import React from 'react';
import recommended from '../utils/recommended';
import Place from '../components/Place';


function Recommend() {
//   let item = {
//     "iconUrl": "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-testing-v2/original/19a53da9-326d-414e-9e23-d74937bb5e6e.png",
//     "location": null,
//     "subtitle": "Popular beach destination",
//     "subtitleA11yText": null,
//     "title": "Barcelona, Spain"
//   }

  return (
    <div className='m-0 p-2'>
      <h1 className='p-2 text-center'>Recommendations</h1>
      <p className='px-2 text-center'>Some places you should visit!</p>
        <div className='row m-0 p-0'>
            {recommended.items.map((item) => (
                <Place key={item.title} item={item} />
            ))}
        </div> 
    </div>
  )
}

export default Recommend;
