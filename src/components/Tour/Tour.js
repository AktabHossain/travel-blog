import React from 'react'


function Tour(props) {
    
    const {id, image, info, price, name} = props;
    console.log(name)
    return (
      <article  className="container-fluid col-md-8 ms-12 m-5 shadow-lg p-3 mb-5 bg-body rounded ">
          <img style={{height:"500px", width:"800px" }} src={image} className="img-fluid" alt={name}></img>
          <div className="d-flex justify-content-between">
              <h4>{name}</h4>
              <h4 className="text-info">${price}</h4>
          </div>
          <p>{info}</p>
      </article>
    )
}

export default Tour
