import React, { useState } from 'react'


function Tour(props) {
    
    const [readMore, setReadMore] = useState(false)
    const {id, image, info, price, name, removeTour} = props;
    console.log(name)
    return (
      <article  className="container-fluid col-md-8 ms-12 m-5 shadow-lg p-3 mb-5 bg-body rounded  ">
          <img style={{height:"500px", width:"800px" }} src={image} className="img-fluid" alt={name}></img>
          <div className="d-flex justify-content-between mt-3">
              <h4>{name}</h4>
              <h4 className="text-info">${price}</h4>
          </div>
          <p className="mt-3">{ readMore?info:`${info.substring(0, 200)}...` }
          <button className="border-0 text-info bg-white"  onClick={() =>setReadMore(!readMore)}>
              {readMore?'show less':'read more'}
          </button>
          </p>
          <div className="text-center">
          <button onClick={() => removeTour(id)} className="btn btn-outline-info">Not Interested</button>
          </div>
      </article>
    )
}

export default Tour
