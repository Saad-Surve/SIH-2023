import React from 'react'

const Card = () => {
  return (
    <div className="card lg:card-side bg-blue-100 flex shadow-xl">
        <figure className='border-inherit rounded-10 border-2'><img src="/images/nyaaydoot.png" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
            </div>
            </div>
    </div>
  )
}

export default Card