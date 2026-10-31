import React from 'react'
import './A.css'
import{acc} from '../data/accessories'
import { Link } from 'react-router-dom'
const Auh = () => {
  return (
    <>
    <div>
        <div className="accessories">
              {acc.map((mc ,index)=> (
                            <div className="card dis" key={index} style={{ width: "18rem" }}>
                              <Link to={`/asingle/${mc.id}`}>
                             

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

export default Auh
