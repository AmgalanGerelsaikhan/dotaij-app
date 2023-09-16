import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={150}
                slidesPerView={1}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {/* SLIDE_DATA.map((item) => {
                    <SwiperSlide><MySlide data={item} /></SwiperSlide>
                }) */}
                <SwiperSlide><MySlide data={1} /></SwiperSlide>
                <SwiperSlide><MySlide data={2} /></SwiperSlide>
            </Swiper>
        </div>
    )
}