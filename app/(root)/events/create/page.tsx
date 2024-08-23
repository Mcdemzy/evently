// import EventForm from "@/components/shared/EventForm";
// import { auth } from "@clerk/nextjs";

import Link from "next/link";

// const CreateEvent = () => {
//   const { sessionClaims } = auth();

//   const userId = sessionClaims?.userId as string;

//   return (
//     <>
//       <section className="py-5 md:py-10">
//         <h3 className="wrapper h3-bold text-center sm:text-left">
//           Create Event
//         </h3>
//       </section>
//       <div className="wrapper my-8">
//         <EventForm userId={userId} type="Create" />
//       </div>
//     </>
//   );
// };

// export default CreateEvent;
export default function CreateEvent()  {
  return (
   <main className="w-full">
    <h2 className="text-[#25194D] font-semibold text-4xl text-center mt-14">CREATE EVENT</h2>
    <p className="text-center mt-2 text-[#25194D]">Begin your journey to an unforgettable experience.</p>
    {/* progress bars */}
    <section className="my-6 w-[90%] m-auto  flex justify-between items-center">
<div className="w-[30%] h-[101px] flex justify-center items-center gap-y-1 flex-col">
  <span className="w-[48px] h-[48px] rounded-full bg-[#25194D] text-white flex justify-center items-center">1</span>
  <p>DETAILS</p>
</div>
<div className="w-[30%] h-[101px] flex justify-center items-center gap-y-1 flex-col">
  <span className="w-[48px] h-[48px] rounded-full bg-[#EDEFFF] text-[#25194D] flex justify-center items-center">2</span>
  <p>TICKETS</p>
</div>
<div className="w-[30%] h-[101px] flex justify-center items-center gap-y-1 flex-col">
  <span className="w-[48px] h-[48px] rounded-full bg-[#EDEFFF] text-[#25194D] flex justify-center items-center">3</span>
  <p>APPEARANCE</p>
</div>
    </section>
    <section className="w-[80%] m-auto h-full">
    <h2 className="text-[#25194D] text-2xl font-semibold">EVENT DETAILS</h2>
    {/* form */}
<form className="mt-5" action="#">
    <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#25194D] dark:text-white">Event Name <span className="text-[#FA776C]">*</span></label>
            <input type="text" name="username" id="username" className=" border border-[#1C1C1C] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#25194D] dark:text-white">Category Event <span className="text-[#FA776C]">*</span></label>
        <select className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
          <option value="">Select Category</option>
        </select>
        </div>
        <div className="col-span-2">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-[#25194D] dark:text-white">Description of event <span className="text-[#FA776C]">*</span></label>
            <textarea cols={4} rows={5} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  name="" id="" ></textarea>
        </div>             
    </div>
    <h2 className="mt-6 text-[#25194D] text-2xl font-semibold">EVENT DATE & TIME</h2>
    <div className="mt-6 grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#25194D] dark:text-white">Start Date <span className="text-[#FA776C]">*</span></label>  
    <input type="date" name="username" id="username" className=" border border-[#1C1C1C] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#25194D] dark:text-white">End Date <span className="text-[#FA776C]">*</span></label>
    <input type="date" name="username" id="username" className=" border border-[#1C1C1C] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
    </div>
    <div className="mt-6 grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#25194D] dark:text-white">Start Time <span className="text-[#FA776C]">*</span></label>  
    <input type="time" name="start-time" id="time" className=" border border-[#1C1C1C] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#25194D] dark:text-white">End Time <span className="text-[#FA776C]">*</span></label>
    <input type="date" name="time" id="username" className=" border border-[#1C1C1C] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
   
        </div>
      
    </div>
    <h2 className="mt-6 text-[#25194D] text-2xl font-semibold">EVENT LOCATION</h2>

<div className="flex flex-row justify-start items-center">
<div className="mt-6 flex items-center">
    <label htmlFor="default-radio-1" className="text-md font-medium text-[#25194D] dark:text-gray-300  me-2">Physical Event</label>
    <input type="radio" name="" id="" />
</div>
<div className="mt-6 flex items-center">
    <label htmlFor="default-radio-2" className="ms-2 text-md font-medium text-[#25194D] dark:text-gray-300 me-2">Online Event</label>
    <input type="radio" name="" id="" />
</div>
</div>
{/* buttons */}
<section className="my-6 mb-10 w-full flex flex-row justify-center gap-x-8 items-center">
    <button className="shaodw-md w-[240px] h-[48px] rounded-md text-primary text-md bg-[#624CF50D]">Cancel</button>
    <Link href="/events/create/2" className="flex justify-center items-center w-[240px] h-[48px] rounded-md text-white text-md bg-[#624CF5]">Proceed</Link>
</section>
</form>

    </section>
   </main>
  )
}