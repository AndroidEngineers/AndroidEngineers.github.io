import { Button } from "@nextui-org/react"
import "swiper/css/pagination"
import React, { FC } from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export const SectionCards: FC<{
  invert?: boolean
  show4Cards?: boolean
  id: string
  heading: string
  description?: string
  items: {
    image?: string
    title: string
    description: string
    isActive?: boolean
    openUrl?: string
  }[]
  isEvent?: boolean
}> = ({ invert, id, heading, description, items, isEvent }) => {
  return (
    <div
      id={id}
      className={`w-full mt-16 pt-16 md:mt-28 ${
        !invert ? "" : "bg-[#f2f5fb]"
      } p-4 pb-0 text-center rounded-lg  sm:p-8 `}
    >
      <h5 className="mb-2 text-2xl lg:text-3xl text-secondary font-bold">
        {heading}
      </h5>
      <p className="mb-5 text-sm lg:text-base sm:text-lg">{description}</p>

      {items.length > 0 && (
        <Swiper
          // navigation
          pagination={{
            // dynamicBullets: true,
            el: `#swiper-custom-pagination${id}`,
          }}
          autoHeight
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-auto flex-shrink-0 flex flex-col items-stretch"
            >
              {/* <div
                key={index}
                
              > */}
              <div className={`${!invert ? "bg-[#f2f5fb]" : "bg-white"} p-4`}>
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={heading}
                    className="w-full mb-4 rounded-md"
                  />
                ) : null}
                <p className="text-xl text-[#25373f] font-medium">
                  {item.title}
                </p>
                <div className="mt-2 text-[#262729b3] leading-relaxed">
                  <p>{item.description}</p>
                </div>
              </div>
              {isEvent ? (
                <Button
                  disabled={!item.isActive}
                  color="primary"
                  className="disabled:bg-gray-300 text-[#25373f] w-full rounded-none"
                  disableRipple={false}
                  disableAnimation={false}
                  isDisabled={!item.isActive}
                  onClick={() => {
                    if (item.isActive && item.openUrl) {
                      window.open(item.openUrl, "_blank")
                    }
                  }}
                >
                  {item.isActive ? "Register" : "Completed"}
                </Button>
              ) : null}
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="w-full flex flex-1 justify-center relative mt-8">
        <div className="absolute pt-4 flex justify-center w-full">
          <div id={`swiper-custom-pagination${id}`} className="" />
        </div>
      </div>
    </div>
  )
}

{
  /* {items.map((item, index) => (
            <div
              key={index}
              className="h-full flex-shrink-0 max-w-xs flex flex-col items-stretch"
            >
              <div className={`${!invert ? "bg-[#f2f5fb]" : "bg-white"} p-4`}>
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={heading}
                    className="w-full mb-4 rounded-md"
                  />
                ) : null}
                <p className="text-xl text-[#25373f] font-medium">
                  {item.title}
                </p>
                <div className="mt-2 text-[#262729b3] leading-relaxed">
                  <p>{item.description}</p>
                </div>
              </div>
              {isEvent ? (
                <Button
                  disabled={!item.isActive}
                  color="primary"
                  className="disabled:bg-gray-300 text-[#25373f] w-full rounded-none"
                  disableRipple={false}
                  disableAnimation={false}
                  isDisabled={!item.isActive}
                  onClick={() => {
                    if (item.isActive && item.openUrl) {
                      window.open(item.openUrl, "_blank")
                    }
                  }}
                >
                  {item.isActive ? "Register" : "Completed"}
                </Button>
              ) : null}
            </div>
          ))} */
}
