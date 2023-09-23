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
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='items-center justify-center text-white bg-slate-600'>
        {data && data.length > 0 ? (
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}

          >
            {data.map((image, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="p-2">
                  <img key={index} src={image} alt={`Image ${index + 1}`} onClick={() => onChangeItem(image)}
                    className="h-80 w-60 rounded-lg bg-black" />
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
  )
}
