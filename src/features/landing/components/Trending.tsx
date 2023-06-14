// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
// import "swiper/css/navigation"
import "swiper/css/scrollbar"
import { getImageSrcWithAPIKey } from "../api/getImage"
import { Languages, MovieGenre, TVgenre } from "../../../config/Constants"

const Trending: React.FC<any> = ({ trendingData }) => {
  return (
    <div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          navigation
        >
          {trendingData.map((trending: any) => (
            <SwiperSlide key={trending.id}>
              <div
                style={{
                  backgroundImage: `url(${getImageSrcWithAPIKey(
                    trending.backdrop_path
                  )})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={` bg-cover bg-no-repeat bg-bottom h-[35rem] w-full `}
              >
                <div className="absolute bottom-0 bg-black-tint p-10 w-full flex flex-col gap-3 items-start">
                  <h1 className="text-5xl text-white ">
                    {trending.name || trending.title}
                  </h1>
                  <div className="flex items-center gap-5">
                    <p className="text-black bg-white rounded-full font-medium px-2 py-1 shadow-xl shadow-[#ffffff3c]">
                      {Languages[trending.original_language]}
                    </p>
                    <div className="flex gap-2">
                      {trending.genre_ids.map((id) => (
                        <p key={id} className="text-white">
                          {trending.media_type === "movie"
                            ? MovieGenre[id]
                            : TVgenre[id]} <span>{" . "}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <p className="text-white line-clamp-1">{trending.overview}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Trending
