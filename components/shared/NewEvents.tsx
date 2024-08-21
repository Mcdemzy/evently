import React from 'react'
import Collection from '@/components/shared/Collection';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';


async function NewEvents({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <div>
      <section
        id="events"
        className="wrapper lg:mt-20 mt-10 flex flex-col gap-4 md:gap-6"
      >
        <div className="">
          <h2 className="text-[30px] lg:text-[40px] font-bold text-center text-[#1C1C1C] dark:text-[#EDEFFF] leading-[60px] md:mb-5 mb-1 uppercase">
            NEW EVENTS
          </h2>
          <div className="max-w-full lg:w-[120px] w-[80px] lg:border-[3px] border-[2px] border-[#1C1C1C] dark:border-[#EDEFFF] mx-auto"></div>
          <p className="text-center font-normal text-base md:text-xl md:mt-5 mt-2 leading-5 md:leading-[60px]">
          Check out events, festivals and parties that are coming up so you don’t miss out
          </p>
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </div>
  )
}

export default NewEvents