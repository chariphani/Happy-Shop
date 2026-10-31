import React from 'react'
import './Lih.css'
import { home } from '../data/Home & Lifestyle'
import { Link } from 'react-router-dom'

const Lih = () => {
  return (
    <>
    <div>
        <div className="ner">
              {home.map((mc ,index)=> (
                            <div className="card dis" key={index} style={{ width: "18rem" }}>
                              <Link to={`/lsingle/${mc.id}`}>
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

export default Lih
