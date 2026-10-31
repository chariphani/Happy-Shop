import React from 'react'
import './Catgiri.css'

const Catgiri = ({immg ,title}) => {
    return (
        <div>
            <div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={`${immg}`} class="card-img-top an" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{`${title}`}</h5>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Catgiri
