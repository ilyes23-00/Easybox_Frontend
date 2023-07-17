// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./Client.css";

// import required modules
import { Autoplay } from "swiper";

const Client = () => {
  const partners = [
    {
      id: 1,
      img: "./images/partners/DHD.svg",
      name: "DHD Livraison",
    },
    {
      id: 2,
      img: "./images/partners/monfrancais.svg",
      name: "Mon Francais",
    },
    {
      id: 3,
      img: "./images/partners/zefafi.svg",
      name: "Zefafi",
    },
    {
      id: 4,
      img: "./images/partners/ibenhaytem.jpg",
      name: "Iben Haytem",
    },
  ];
  return (
    <div className="container  mx-auto my-6">
      <div className=" services flex flex-col items-start">
        <span className="text-[#F99D58] tracking-wide font-semibold px-6 py-2 w-40 my-6 text-center service-span relative">
          Our Clients
        </span>
        <h3 className="text-2xl lg:text-3xl xl:text-4xl uppercase my-5 font-bold">
          Working together to shape our world for difference.
        </h3>
        <p className="my-3 lg:my-5 text-gray-700 text-md lg:text-lg text-start  capitalize">
          We believe long-term, impactful partnerships are central to achieving
          our mission. Therefore, we work with and alongside others to shape the
          world for difference — so every individual can thrive.
        </p>
      </div>
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div>
                <img src={partner.img} alt={partner.name} width={150} height={150} className="aspect-square" />
                <h3 className="font-semibold tracking-wide mt-4 text-xl uppercase">{partner.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
