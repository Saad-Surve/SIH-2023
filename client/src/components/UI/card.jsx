import React from 'react'

const Card = (props) => {
  return (
    <div className="card lg:card-side bg-white flex direction-row shadow-xl">
        <figure className='flex w-full bg-blue-500 border border-red-500'><img src={props.image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
            <div className="card-actions justify-end ">
                <a href={props.link}><button className="btn btn-primary">Learn More</button></a>
            </div>
            </div>
    </div>
  )
}

export default Card