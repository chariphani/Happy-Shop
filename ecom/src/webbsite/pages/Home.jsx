import React from 'react'
import './Home.css'
import Slide from '../compunents/Slide'
import Catgiri from '../compunents/Catgiri'
import Product from '../compunents/Product'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <div className='mmm'> 
                <Slide />
                <div className="r" id='cg'>
                    <h1 >Categories</h1>
                    <div className="catg">
                        <Link to="/mec">
                            <Catgiri immg={'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg'} title={'Mens Clothing'} />
                        </Link>
                        <Link to="/w">
                            <Catgiri immg={'https://media.istockphoto.com/id/935032524/photo/women-summer-dresses-on-display-at-camden-market.jpg?s=612x612&w=0&k=20&c=_L2DC3Fq4wST3v9fsonpJzARWpMibAVtWUkZXPrQALs='} title={'Womens Clothing'} />
                        </Link>
                        <Link to="/c">
                            <Catgiri immg={'https://c0.wallpaperflare.com/preview/140/848/931/adorable-boy-child-cute.jpg'} title={'Kids Wear'} />
                        </Link>
                        <Link to="/f">
                            <Catgiri immg={'https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk='} title={'Footwear'} />
                        </Link>

                        <Link to="/a">
                            <Catgiri immg={'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg'} title={'Accessories'} />
                        </Link>
                        <Link to="/b">
                            <Catgiri immg={'https://t4.ftcdn.net/jpg/02/99/06/03/360_F_299060393_2kkwSCSx36oUXfrdEDrYkP2PlDAteMHW.jpg'} title={'Beauty & Personal Care'} />
                        </Link>

                        <Link to="/j">
                            <Catgiri immg={'https://t4.ftcdn.net/jpg/06/95/46/17/360_F_695461716_tnpwMR7YYXFNFVI5rqqI0ldpVUM0rsKD.jpg'} title={'Jewelry'} />
                        </Link>
                        <Link to="/spw">
                            <Catgiri immg={'https://media.istockphoto.com/id/466367844/photo/clothes-make-running.jpg?s=612x612&w=0&k=20&c=eGOSP7X2MoXpGKhv8a3UlYHplvKvIIdUPmVKBSd3bMI='} title={'Sportswear & Activewear'} />
                        </Link>
                        <Link to="/mb">
                            <Catgiri immg={'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/wm/2025/01/front-and-back-of-the-samsung-galaxy-s25-ultra-standing-on-a-table-next-to-an-s-pen.jpg'} title={'Mobiles'} />
                        </Link>
                        <Link to="/lih">
                            <Catgiri immg={'https://www.shutterstock.com/image-photo/stacks-towels-sheets-bedding-clothes-600nw-1949936335.jpg'} title={'Home & Lifestyle'} />
                        </Link>
                    </div>
                </div>
                <div  className='ap'>
                    <h1> All Products</h1>
                    <div>
                       <Product />
                    </div>


                </div>
               


            </div>
        </>
    )
}

export default Home
