import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
    setActiveImg(item);
    setIsOpen(true);
  };

  return (
    <div className="items-center justify-center text-white">
      {data && data.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView={1} // Adjust this for different screen sizes
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Apply a CSS class to the container to prevent wrapping */}
          <div className="flex-no-wrap"> {/* Add this class */}
            {data.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="p-2">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    onClick={() => onChangeItem(image)}
                    className="h-80 w-60 rounded-lg bg-black"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      ) : (
        <>Not found</>
      )}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} bgImage={activeImg}></Modal>
      )}
        <style jsx global>{`
                .swiper-pagination-bullet {
                    background-color: white;
                }

                .swiper-pagination-bullet-active {
                    background-color: black; /* Change to your desired active color */
                }
            `}</style>
    </div>
  );
}
