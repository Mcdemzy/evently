import { IEvent } from '@/lib/database/models/event.model';
import { formatDateTime } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { DeleteConfirmation } from './DeleteConfirmation';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserId() {
      const response = await fetch('/api/auth-data');
      const data = await response.json();
      setUserId(data.userId);
    }
    fetchUserId();
  }, []);

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group mx-auto relative flex h-full w-full max-w-[382px] flex-col overflow-hidden rounded-xl bg-white dark:bg-black shadow-md transition-all hover:shadow-lg border-[#DFE1FF] border">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="bg-gray-50 bg-cover bg-center text-grey-500 h-[300px] max-h-full w-full"
      />
      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
          <DeleteConfirmation eventId={event._id} />
        </div>
      )}
      <div className="flex h-full flex-col gap-3 p-5 md:gap-4">
        <Link href={`/events/${event._id}`}>
          <p className="font-semibold text-2xl text-[#25194D] dark:text-white">{event.title}</p>
        </Link>
        {!hidePrice && (
          <div className="flex gap-8 w-full items-center">
            <span className="font-semibold text-xl rounded-full bg-[#25194D] dark:bg-white px-6 py-2 text-white dark:text-black">
              {event.isFree ? 'FREE' : `$${event.price}`}
            </span>
            <p className="font-medium text-xl rounded-full text-[#25194D] dark:text-white">
              {event.category.name}
            </p>
          </div>
        )}
        <p className="font-medium text-xl text-[#25194D] dark:text-white flex items-center gap-5">
          <FaCalendarAlt size={24} />
          {formatDateTime(event.startDateTime).dateTime}
        </p>
        <div className="flex-between w-full">
          <p className="font-medium text-xl text-[#25194D] dark:text-white flex items-center gap-5">
            <FaMapMarkerAlt size={24} />
            {event.organizer.firstName} {event.organizer.lastName}
          </p>
          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-[#25194D] dark:text-white">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

// import { IEvent } from '@/lib/database/models/event.model';
// import { formatDateTime } from '@/lib/utils';
// import { auth } from '@clerk/nextjs';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { DeleteConfirmation } from './DeleteConfirmation';
// import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

// type CardProps = {
//   event: IEvent;
//   hasOrderLink?: boolean;
//   hidePrice?: boolean;
// };

// const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
//   const { sessionClaims } = auth();
//   const userId = sessionClaims?.userId as string;

//   const isEventCreator = userId === event.organizer._id.toString();

//   return (
//     <div className="group relative flex min-h-[382px] w-full max-w-[382px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg h-auto border-[#DFE1FF] border">
//       <Link
//         href={`/events/${event._id}`}
//         style={{ backgroundImage: `url(${event.imageUrl})` }}
//         className="bg-gray-50 bg-cover bg-center text-grey-500 h-[300px] w-full"
//       />
//       {/* IS EVENT CREATOR ... */}

//       {isEventCreator && !hidePrice && (
//         <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
//           <Link href={`/events/${event._id}/update`}>
//             <Image
//               src="/assets/icons/edit.svg"
//               alt="edit"
//               width={20}
//               height={20}
//             />
//           </Link>

//           <DeleteConfirmation eventId={event._id} />
//         </div>
//       )}

//       <div className="flex h-auto flex-col gap-3 p-5 md:gap-4">
//         <Link href={`/events/${event._id}`}>
//           <p className="font-semibold text-2xl text-[#25194D]">{event.title}</p>
//         </Link>

//         {!hidePrice && (
//           <div className="flex gap-8 w-full items-center">
//             <span className="font-semibold text-xl rounded-full bg-[#25194D] px-6 py-2 text-white">
//               {event.isFree ? 'FREE' : `$${event.price}`}
//             </span>
//             <p className="font-medium text-xl rounded-full text-[#25194D]">
//               {event.category.name}
//             </p>
//           </div>
//         )}

//         <p className="font-medium text-xl text-[#25194D] flex items-center gap-5">
//           <FaCalendarAlt size={24} color="#25194D" />
//           {formatDateTime(event.startDateTime).dateTime}
//         </p>

//         <div className="flex-between w-full">
//           {/* this will change to the event location */}
//           <p className="font-medium text-xl text-[#25194D] flex items-center gap-5">
//             <FaMapMarkerAlt size={24} color="#25194D" />
//             {event.organizer.firstName} {event.organizer.lastName}
//           </p>

//           {hasOrderLink && (
//             <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
//               <p className="text-primary-500">Order Details</p>
//               <Image
//                 src="/assets/icons/arrow.svg"
//                 alt="search"
//                 width={10}
//                 height={10}
//               />
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
