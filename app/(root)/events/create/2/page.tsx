// import EventForm from "@/components/shared/EventForm";
// import { auth } from "@clerk/nextjs";
import { Globe } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import { BiParty } from "react-icons/bi";
import { BsPersonVcard } from "react-icons/bs";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LuTicket } from "react-icons/lu";
import { MdOutlineCardGiftcard } from "react-icons/md";

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
export default function Page()  {
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
  <span className="w-[48px] h-[48px] rounded-full bg-[#25194D] text-white flex justify-center items-center">2</span>
  <p>TICKETS</p>
</div>
<div className="w-[30%] h-[101px] flex justify-center items-center gap-y-1 flex-col">
  <span className="w-[48px] h-[48px] rounded-full bg-[#EDEFFF] text-[#25194D] flex justify-center items-center">3</span>
  <p>APPEARANCE</p>
</div>
    </section>
    <section className="mt-4 mb-10 bg-[#E9E8ED] space-y-4 flex flex-col jusitfy-center items-center w-[80%] m-auto h-[440px] rounded-md">
        {/* ticket logo */}
        <div className="mt-10 w-[100px] h-[100px]  rounded-full ">
          <Image src="/assets/images/ticket.png" width={100} height={100} alt={""}/>
        </div>
        <p className="text-xl text-[#25194D] text-center font-semibold">CREATE EVENT</p>
        <p className="text-center text-[#25194D]">Create your first Ticket. It won’t take long.</p>
        <div className="flex justify-center items-center w-full">
        <button className="m-auto text-[#25194D] bg-white px-4 p-1.5 border border-[#25194D] rounded-sm shadow-md">Add ticket +</button>
        </div>
    </section>
    <section className="mt-4 w-[80%] m-auto  py-10">
    <h2 className="text-[#25194D] text-2xl font-semibold">SOCIAL LINK</h2>
    <div className="mt-2 w-full flex flex-row gap-x-5 jusitfy-between items-center">
      <div className="w-[50%] space-y-4">
        {/* website */}
        <div className="mt-4 flex jusitfy-start items-center rounded-md">
          <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
          <Globe color="#25194D" />
          </div>
          <input className="w-full h-[46px] border border-[#1C1C1C] rounded-e-md" type="text" name="" id="" />
        </div>
        {/* twitter */}
        <div className="flex jusitfy-start items-center rounded-md">
          <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
          <Globe color="#25194D" />
          </div>
          <input className="w-full h-[46px] border border-[#1C1C1C] rounded-e-md" type="text" name="" id="" />
        </div>
        {/* instagram */}
        <div className="flex jusitfy-start items-center rounded-md">
          <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
          <Globe color="#25194D" />
          </div>
          <input className="w-full h-[46px] border border-[#1C1C1C] rounded-e-md" type="text" name="" id="" />
        </div>
        {/* whatsapp */}
        <div className="flex jusitfy-start items-center rounded-md">
          <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
          <Globe color="#25194D" />
          </div>
          <input className="w-full h-[46px] border border-[#1C1C1C] rounded-e-md" type="text" name="" id="" />
        </div>
        {/* facebook */}
        <div className="flex jusitfy-start items-center rounded-md">
          <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
          <Globe color="#25194D" />
          </div>
          <input className="w-full h-[46px] border border-[#1C1C1C] rounded-e-md" type="text" name="" id="" />
        </div>
        {/* telegram */}
        <div className="flex jusitfy-start items-center rounded-md">
          <div className="w-[56px] h-[46px] border border-[#1C1C1C] rounded-s-md flex justify-center items-center">
          <Globe color="#25194D" />
          </div>
          <input className="w-full h-[46px] border border-[#1C1C1C] rounded-e-md" type="text" name="" id="" />
        </div>
      </div>
      <div className="w-[50%] py-40  flex items-center justify-center relative">
          {/* Evently Logo Section */}
          <div className="flex items-center justify-center w-[200px] h-[200px] gap-3 shadow-2xl rounded-full px-[13px] py-[50px] z-[1] bg-white dark:text-black">
            <Image
              src="/assets/images/logo.svg"
              width={30}
              height={50}
              alt="Event Image"
              className=""
            />
            <span className="md:text-2xl text-xl font-bold">Evently</span>

          </div>

          {/* Icon and Line Section */}
          <section className="absolute flex flex-col items-center">
            <div className="bg-[#FEF3F2] w-[20px] h-[20px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <FaRegCalendarXmark />
              </span>
            </div>
            <div className="w-[80px] h-fit flex flex-col items-center">
              {/* Broken Line Effect */}
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className="bg-[#FA776C] w-2 h-3 mb-3 block"
                ></span>
              ))}
            </div>
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <BsPersonVcard />
              </span>
            </div>
          </section>

          <section className="absolute rotate-[60deg] flex flex-col items-center">
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <MdOutlineCardGiftcard />
              </span>
            </div>
            <div className="w-[80px] h-fit flex flex-col items-center">
              {/* Broken Line Effect */}
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className="bg-[#FA776C] w-2 h-3 mb-3 block"
                ></span>
              ))}
            </div>
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <HiOutlineMail />
              </span>
            </div>
          </section>

          <section className="absolute rotate-[-60deg] flex flex-col items-center">
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <LuTicket />
              </span>
            </div>
            <div className="w-[80px] h-fit flex flex-col items-center">
              {/* Broken Line Effect */}
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className="bg-[#FA776C] w-2 h-3 mb-3 block"
                ></span>
              ))}
            </div>
            <div className="bg-[#FEF3F2] w-[80px] h-[80px] rounded-full p-4 flex justify-center items-center">
              <span className="text-[#FA776C] text-[2rem]">
                <BiParty />
              </span>
            </div>
          </section>
      </div>
    </div>
{/* buttons */}
</section>
  <section className="mt-20 my-6 mb-10 w-full flex flex-row justify-center gap-x-8 items-center">
      <button className="shaodw-md w-[240px] h-[48px] rounded-md text-primary text-md bg-[#624CF50D]">Cancel</button>
      <Link href="/events/create/2" className="flex justify-center items-center w-[240px] h-[48px] rounded-md text-white text-md bg-[#624CF5]">Proceed</Link>
  </section>
   </main>
  )
}