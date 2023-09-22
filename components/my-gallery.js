import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import Modal from './modal';

export default function MyGallery({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImg, setActiveImg] = useState('');

  const onChangeItem = (item) => {
    setActiveImg(item.img);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='items-center justify-center text-white bg-gray-800'>
        {data.length > 0 ? (
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={5}
            slidesPerView={3} // Adjust the number of slides per view for small screens
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 p-4"
          >
            {data.map((image, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="p-2">
                  <img
                    key={index}
                    src={image.img}
                    alt={`Image ${index + 1}`}
                    onClick={() => onChangeItem(image)}
                    className="h-60 rounded-lg bg-black"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>Not found</>
        )}
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} bgImage={activeImg}></Modal>
      )}
    </>
  );
}
