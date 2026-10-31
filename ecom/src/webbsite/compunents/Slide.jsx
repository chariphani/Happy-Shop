import React from 'react'
import './Slide.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
    };

    return (
        <div>
            <div>
                <div className="slider-container baan">
                    <Slider {...settings}>
                        <div>
                            <img src="https://t3.ftcdn.net/jpg/02/62/18/46/360_F_262184611_bXhmboL9oE6k2ILu4qXxNWFhNJCEbTn2.jpg" alt=""  width={"100%"} height={"300px"} />
                        </div>
                        <div>
                            <img src="https://t4.ftcdn.net/jpg/07/51/66/05/360_F_751660549_sbBTsejzwpjXlmuoCk66VTQZGO3hztjy.jpg" alt=""  width={"100%" }  height={"300px"} />
                        </div>
                        <div>
                           
                          <img src="https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg" alt=""  width={"100%"}  height={"300px"}/>
                        </div>
                        <div>
                           <img src="https://img.pikbest.com/backgrounds/20180820/online-shopping-gradient-banner-poster-background_1842381.jpg!sw800" alt=""  width={"100%"} height={"300px"} />
                        </div>
                       
                    </Slider>
                </div>

            </div>

        </div>
    );
}

export default Slide
