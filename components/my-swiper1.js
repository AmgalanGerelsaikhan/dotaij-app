import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MySlide from './my-slide';


export default function MySwiper() {
    return (
        <div className=' items-center justify-center text-white '>
            <Swiper
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={150}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {/* SLIDE_DATA.map((item) => {
                    <SwiperSlide><MySlide data={item} /></SwiperSlide>
                }) */}
                <SwiperSlide><MySlide data={1} /></SwiperSlide>
                <SwiperSlide><MySlide data={2} /></SwiperSlide>
            </Swiper>

            {/* Custom CSS to style the pagination */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background-color: white;
                }

                .swiper-pagination-bullet-active {
                    background-color: white; /* Change to your desired active color */
                }
            `}</style>
        </div>
    )
}