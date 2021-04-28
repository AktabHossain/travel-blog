import React from 'react'
import Tour from '../Tour/Tour'

function Tours({tours, removeTour}) {
    
    
    return (
        <>
        <div className="container-fluid">
            <h2 className="text-center text-info"><u>Ours Tours</u></h2>
        </div>
        <div  className="row container-fluid justify-content-md-center  ">
            {
                tours.map(tour => {
                  return  <Tour key={tour.id} {...tour}  removeTour={removeTour}></Tour>
                })
            }
        </div>
        </>
       
    )
}

export default Tours
