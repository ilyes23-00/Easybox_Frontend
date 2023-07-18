
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules

import Cards from "../Cards/Cards";

// import required modules
import { Autoplay  } from "swiper/modules";
 // array for the list of services 
const provides = [
  {
    id: 1,
    title: 'Ecommerce Platform',
    paragraph: 'your audience should feel connected with your content. therfor, you need to understand your audience better than your competitors.',
    picture: '../../src/assets/images/solutions/web_app.jpg',
  },
  {
    id: 2,
    title: 'Video Production',
    paragraph: 'your audience should feel connected with your content. therfor, you need to understand your audience better than your competitors.',
    picture: '../../src/assets/images/solutions/video_prod.jpg',
  },
  {
    id: 3,
    title: 'Branding Design',
    paragraph: 'your audience should feel connected with your content. therfor, you need to understand your audience better than your competitors.',
    picture: '../../src/assets/images/solutions/design.jpg',
  },
  {
    id: 4,
    title: 'Study Your Business',
    paragraph: 'your audience should feel connected with your content. therfor, you need to understand your audience better than your competitors.',
    picture: '../../src/assets/images/solutions/consulting.jpg',
  }
];


export default function App() {
  return (
    <>
          <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
        {provides.map(provide => {
          return <SwiperSlide key={provide.id}> <Cards  {...provide} /> </SwiperSlide>
        })}
      

      </Swiper>
    </>
  );
}
