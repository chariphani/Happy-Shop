import React from 'react'
import './J.css'
import {jew} from '../data/Jewelry'
import { Link } from 'react-router-dom'

const J = () => {
  return (
    <>
    <div>
        <div className="je">
              {jew.map((mc ,index)=> (
                            <div className="card dis" key={index} style={{ width: "18rem" }}>
                              <Link to={`/jsingle/${mc.id}`}>
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

export default J
