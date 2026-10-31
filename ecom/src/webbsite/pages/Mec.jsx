import React from 'react'
import './Men.css'
import {men} from '../data/mens'
import { Link } from 'react-router-dom'

const Mec = () => {
  return (
    <>
    <div>
        <div className="maa">
            {men.map((mc )=> (
                <div className="card dis"  style={{ width: "18rem" }}>
                    <Link to={`/msingle/${mc.id}`}>
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

export default Mec
