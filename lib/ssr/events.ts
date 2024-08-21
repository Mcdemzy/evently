// lib/ssr/events.ts

import { getAllEvents } from '@/lib/actions/event.actions';

export async function getTrendingEventsProps(context: any) {
  const searchParams = context.query;

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return {
    props: {
      events, // Pass events as props to the component
      searchParams,
    },
  };
}
