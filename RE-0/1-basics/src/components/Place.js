import React from 'react'

function Place({ item }) {
  return (
    <div className='col-6 col-md-4 col-lg-3 m-0 p-3 shadow rounded-lg text-center'>
        <div className=''>
            <img className="img img-fluid" src={item.iconUrl} alt="img" />
        </div>
        <h5>{item.title}</h5>
        <p>{item.subtitle}</p>
    </div>
  )
}

export default Place;