import React from 'react'
import './W.css'
import { women } from '../data/womens'
import { Link } from 'react-router-dom'

const W = () => {
  return (
    <>
    <div>
        <div className="wom">
             {women.map((mc ,index)=> (
                            <div className="card dis" key={index} style={{ width: "18rem" }}>
                              <Link to={`/wsingle/${mc.id}`}>
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

export default W
