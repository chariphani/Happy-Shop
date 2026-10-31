import React from 'react'
import './B.css'
import { bea } from '../data/Beauty & Personal Care'
import { Link } from 'react-router-dom'

const B = () => {
  return (
    <>
    <div>
        <div className='bo'> 
              {bea.map((mc ,index)=> (
                            <div className="card dis" key={index} style={{ width: "18rem" }}>
                              <Link to={`/bsingle/${mc.id}`}>
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

export default B
