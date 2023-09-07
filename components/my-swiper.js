import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import 'swiper/css'; // Import individual styles
import 'swiper/css/navigation';

export default function Homeslider() {
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '24px',
    };

    const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    };

    const glassBlurStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        zIndex: '-1',
    };

    // Define media queries for different screen sizes
    const mediaQueries = {
        small: {
            maxWidth: '800px', // Adjust the maximum width for small screens
            height: '300px', // Adjust the height for small screens
        },
        medium: {
            minWidth: '768px', // Adjust the minimum width for medium screens
            maxWidth: '991px', // Adjust the maximum width for medium screens
            height: '400px', // Adjust the height for medium screens
        },
        large: {
            minWidth: '992px', // Adjust the minimum width for large screens
            maxWidth: '1200px', // Adjust the maximum width for large screens
            height: '500px', // Adjust the height for large screens
        },
    };

    return (
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div className="swiper-container">
                <div style={glassBlurStyle}></div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide",
                    }}
                    modules={{ Navigation }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {/* Your SwiperSlides here */}
                </Swiper>
            </div>
            <style>
                {`
          @media screen and (max-width: ${mediaQueries.small.maxWidth}) {
            .swiper-container {
              width: ${mediaQueries.small.maxWidth};
              height: ${mediaQueries.small.height};
            }
          }

          @media screen and (min-width: ${mediaQueries.medium.minWidth}) and (max-width: ${mediaQueries.medium.maxWidth}) {
            .swiper-container {
              width: ${mediaQueries.medium.maxWidth};
              height: ${mediaQueries.medium.height};
            }
          }

          @media screen and (min-width: ${mediaQueries.large.minWidth}) {
            .swiper-container {
              width: ${mediaQueries.large.maxWidth};
              height: ${mediaQueries.large.height};
            }
          }
        `}
            </style>
        </div>
    );
}
