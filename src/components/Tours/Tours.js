import React from 'react'
import Tour from '../Tour/Tour'

function Tours({tours}) {
    
    
    return (
        <>
        <div className="container-fluid">
            <h2 className="text-center text-info"><u>Ours Tours</u></h2>
        </div>
        <div style={{marginLeft:"15rem"}} className="row ">
            {
                tours.map(tour => {
                  return  <Tour key={tour.id} {...tour} ></Tour>
                })
            }
        </div>
        </>
       
    )
}

export default Tours
