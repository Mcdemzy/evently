// import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
// import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import HeroSection from '@/components/shared/HeroSection';
import FAQ from '@/components/shared/FAQ';
import NewsletterSubscription from '@/components/shared/NewsLetterSubscription';
import PricingSection from '@/components/shared/PricingSection';

export default async function Home({ searchParams }: SearchParamProps) {
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
    <>
      <section>
        <HeroSection />
      </section>
      <section className="bg-[#EDEFFF] dark:bg-black py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-[#25194D] dark:text-white">
              Host, Connect, Celebrate:
              <br />
              <span className="font-bold">Your Events, Our Platform!</span>
            </h1>
            <p className="p-regular-20 md:p-regular-24 text-[#25194D] dark:text-white">
              With Evently, your event is not just planned—it’s perfectly
              orchestrated.
            </p>
            <Button
              size="xl"
              asChild
              className={buttonVariants({ variant: 'explorenow', size: 'xl' })}
            >
              <Link href="#events" className="text-white">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper lg:mt-20 mt-10 flex flex-col gap-4 md:gap-6"
      >
        {/* <h2 className="h2-bold">
          Trust by <br /> Thousands of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-">
          <Search />
          <CategoryFilter />
        </div> */}
        <div className="">
          <h2 className="text-[30px] lg:text-[40px] font-bold text-center text-[#1C1C1C] dark:text-[#EDEFFF] leading-[60px] lg:mb-5 mb-[10px] uppercase">
            TRENDING EVENTS
          </h2>
          <div className="max-w-full lg:w-[120px] w-[80px] lg:border-[3px] border-[2px] border-[#1C1C1C] dark:border-[#EDEFFF] mx-auto"></div>
          <p className="text-center font-normal text-base md:text-xl mt-5 leading-5 md:leading-[60px]">
            Elevating Experiences, One Event at a Time
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
      <section
        id="events"
        className="wrapper lg:mt-20 mt-10 flex flex-col gap-4 md:gap-6"
      >
        <div className="">
          <h2 className="text-[30px] lg:text-[40px] font-bold text-center text-[#1C1C1C] dark:text-[#EDEFFF] leading-[60px] lg:mb-5 mb-[10px] uppercase">
            NEW EVENTS
          </h2>
          <div className="max-w-full lg:w-[120px] w-[80px] lg:border-[3px] border-[2px] border-[#1C1C1C] dark:border-[#EDEFFF] mx-auto"></div>
          <p className="text-center font-normal text-base md:text-xl mt-5 leading-5 md:leading-[60px]">
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
      <section>
        <FAQ />
      </section>
      <section>
        <NewsletterSubscription/>
      </section>
      <section>
        <PricingSection />
      </section>
    </>
  );
}
