import React from 'react'
import './Spw.css'
import {spo} from '../data/Sportswear & Activewear'
import { Link } from 'react-router-dom'

const Spw = () => {
  return (
    <>
    <div>
        <div className="spw">
              {spo.map((mc ,index)=> (
                            <div className="card dis" key={index} style={{ width: "18rem" }}>
                              <Link to={`/spsingle/${mc.id}`}>
                                <img src={mc.imges} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{mc.title}</h5>
                                     <h5 className="card-title"> {mc.price}</h5>
                                 
                                </div>
                            </div>
                        ))}
            
        </div>
      
    </div>
    </>
  )
}

export default Spw
