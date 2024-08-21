'use client';
import { IEvent } from '@/lib/database/models/event.model';
import React from 'react';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import './Collection.css';
// import Pagination from "./Pagination";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events';
};

const Collection = ({
  data ,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  const [slides, setSlides] = useState<IEvent[]>([]);

  useEffect(() => {
    setSlides([...data, ...data, ...data]);
  }, [data]);

  return (
    <>
      {data.length > 0 ? (
        <div className="relative flex items-center h-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              360: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            className="w-full"
            centeredSlides={true}
            slideToClickedSlide={true}
          >
            {slides.map((event, index) => {
              const hasOrderLink = collectionType === 'Events_Organized';
              const hidePrice = collectionType === 'My_Tickets';

              return (
                <SwiperSlide
                  key={event._id}
                  className={`w-auto transition-transform duration-500`}
                >
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="swiper-button-prev z-10 cursor-pointer flex items-center justify-center bg-black/50 dark:bg-white/50 hover:bg-black/75 dark:hover:bg-white/75 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white dark:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L10.414 12l5.293 5.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="swiper-button-next z-10 cursor-pointer flex items-center justify-center bg-black/50 dark:bg-white/50 hover:bg-black/75 dark:hover:bg-white/75 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white dark:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.293 18.707a1 1 0 010-1.414L13.586 12 8.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )} */}
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default Collection;
