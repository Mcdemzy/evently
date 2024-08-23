// import EventForm from "@/components/shared/EventForm";
// import { auth } from "@clerk/nextjs";

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
   <main className="w-full h-[700px]">
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
    <section className="w-[80%] m-auto border-2 border-primar">
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
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
          <option value="">Select Category</option>
        </select>
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
        </div>                        <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input type="password" name="confirm-password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
        </div>
    </div>
    <h2 className="mt-6 text-[#25194D] text-2xl font-semibold">EVENT DATE & TIME</h2>
    <div className="mt-6 grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#25194D] dark:text-white">Start Date <span className="text-[#FA776C]">*</span></label>
           
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 lucide lucide-calendar-days" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
        </div>
        <input type="date" id="default-search" className="p-4 ps-10 border border-[#1C1C1C] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>

        </div>
        <div>
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#25194D] dark:text-white">End Date <span className="text-[#FA776C]">*</span></label>
        <input type="text" name="username" id="username" className=" border border-[#1C1C1C] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
        </div>                        <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input type="password" name="confirm-password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
        </div>
    </div>
</form>

    </section>
   </main>
  )
}