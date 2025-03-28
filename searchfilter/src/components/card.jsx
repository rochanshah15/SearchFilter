import React from 'react'

function Card({name,brand,price,src}) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={src}
      alt="Shoes"
      style = {{height : "250px", width : "350px" }}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">Buy Now</div>
    </h2>
    <p>A delicious meal on the way!</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{brand}</div>
      <div className="badge badge-outline">{ "$" + price}</div>
    </div>
  </div>
</div>
  )
}

export default Card