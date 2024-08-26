// import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import HeroSection from '@/components/shared/HeroSection';
import FAQ from '@/components/shared/FAQ';
import NewsletterSubscription from '@/components/shared/NewsLetterSubscription';
import PricingSection from '@/components/shared/PricingSection';
import ExploreNow from '@/components/shared/ExploreNow';
import NewEvents from '@/components/shared/NewEvents';
import TrendingEvents from '@/components/shared/TrendingEvents';

export default function Home({ searchParams }: SearchParamProps) {
  // const page = Number(searchParams?.page) || 1;
  // const searchText = (searchParams?.query as string) || '';
  // const category = (searchParams?.category as string) || '';

  // const events = await getAllEvents({
  //   query: searchText,
  //   category,
  //   page,
  //   limit: 6,
  // });

  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <ExploreNow />
      </section>
      <section>
        <TrendingEvents params={{
          id: ''
        }} searchParams={{}}/>
      </section>
      <section>
        <NewEvents params={{
          id: ''
        }} searchParams={{}} />
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
