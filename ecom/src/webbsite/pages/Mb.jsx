import React from 'react'
import './Mb.css'
import {mo} from '../data/mobiles'
import { Link } from 'react-router-dom'

const Mb = () => {
  return (
    <>
    <div>
        <div className="mbb">
              {mo.map((mc ,index)=> (
                            <div className="card dis" key={index} style={{ width: "18rem" }}>
                              <Link to={`/phsingle/${mc.id}`} >
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

export default Mb
