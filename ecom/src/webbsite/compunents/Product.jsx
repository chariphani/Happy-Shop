import React from 'react';
import './Product.css';
import { men } from '../data/mens';
import { women } from '../data/womens';
import { child } from '../data/childrens';
import { foo } from '../data/foot';
import { acc } from '../data/accessories';
import { jew } from '../data/Jewelry';
import { mo } from '../data/mobiles';
import { home } from '../data/Home & Lifestyle';
import { spo } from '../data/Sportswear & Activewear';
import { bea } from '../data/Beauty & Personal Care';

const allpro = [...men, ...women, ...child, ...foo, ...acc, ...jew, ...mo, ...home, ...spo, ...bea];

const Product = () => {
  return (
    <div className="product-container alo">
      <div className="pro">
        {allpro.map((mc, index) => (
          <div className="card dis" key={index} style={{ width: '18rem' }}>
            <img src={mc.imges} className="card-img-top" alt="product" />
            <div className="card-body">
              <h5 className="card-title">{mc.title}</h5>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
