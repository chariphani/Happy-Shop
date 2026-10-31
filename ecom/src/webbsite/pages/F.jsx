import React from 'react'
import './F.css'
import{foo} from '../data/foot'
import { Link } from 'react-router-dom'

const F = () => {
  return (
    <>
    <div className='of'>
        <div className="f1">
              {foo.map((mc ,index)=> (
                            <div className="card dis" key={index} style={{ width: "18rem" }}>
                              <Link to={`/fsingle/${mc.id}`} >

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

export default F
