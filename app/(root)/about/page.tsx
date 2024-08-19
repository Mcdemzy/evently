"use client";
import Image from "next/image";
import React, { useState, FormEvent } from "react";

const AboutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", { name, email });
    setName("");
    setEmail("");
  };
  return (
    <>
      {/* About Evently */}
      <section>
        <h1 className="text-[3rem] font-semibold text-center py-2 text-[#FA776C] mb-[50px]">
          About Evently
        </h1>
        <div className="flex gap-[32px] justify-center">
          <div>
            <Image
              src="/assets/images/event.png"
              width={600}
              height={816}
              alt="Event Image"
              className="rounded-tl-[40px] rounded-br-[40px]"
            />
          </div>

          <div>
            <h2 className="text-[#624CF5] text-[2rem] font-medium ">
              Welcome To Evently
            </h2>
            <h3 className="text-[#1C1C1C] font-medium text-[1.75rem] leading-[70px]">
              Turning dreams into Extraordinary Events.
            </h3>
            <p className="text-[#1C1C1C] font-light text-[1.25rem] leading-10 max-w-[768px] text-justify">
              At Evently, we believe that every event tells a story—your story.
              Whether you’re celebrating a milestone, launching a product, or
              hosting a corporate gala, our mission is to bring your vision to
              life with creativity, precision, and a touch of magic. From
              intimate gatherings to large-scale celebrations, we handle every
              detail with care, ensuring that your event is not only successful
              but truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Evently */}
      <section className="bg-[#EDEFFF] w-full  mt-10 py-[60px] px-[100px]">
        <h1 className="text-[#624CF5] text-[1.75rem] font-semibold leading-8 mb-4">
          What is Evently?
        </h1>
        <div className="text-[#1C1C1C] text-[1.25rem] font-normal text-justify flex flex-col gap-8 leading-7">
          <p>
            Evently is more than just an event management company; we are
            creators of experiences that leave lasting impressions. Founded on
            the principles of innovation, dedication, and excellence, Evently
            has quickly become a trusted name in the industry. Our team of
            seasoned professionals brings together expertise from various
            fields, including event planning, design, logistics, and
            entertainment, to deliver a seamless and stress-free experience for
            our clients.
          </p>
          <p>
            We pride ourselves on our ability to take your ideas and transform
            them into reality. Whether you have a clear vision or just the
            beginning of an idea, we work closely with you to design and execute
            an event that reflects your personality, brand, and goals. Our
            holistic approach ensures that every element, from venue selection
            to vendor coordination, is perfectly orchestrated, allowing you to
            relax and enjoy the moment.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <article>
        <section className="flex gap-5 justify-evenly py-[20px] px-[40px] mt-[80px]">
          <div>
            <aside className="flex items-center gap-4">
              <div className="bg-[#624CF5] w-[4px] h-[40px]"></div>
              <h1 className="text-[#624CF5] text-[1.75rem] font-semibold">
                Our Vision
              </h1>
            </aside>
            <p className="text-[#1C1C1C] text-[1.25rem] font-normal text-justify max-w-[600px] mt-[20px]">
              Our vision is to be the leading event management company known for
              our innovative approach, exceptional service, and ability to
              create meaningful experiences. We aspire to set new standards in
              the industry, where every event we manage is a benchmark for
              excellence and creativity. At Evently, we envision a world where
              events are not just gatherings but transformative experiences that
              bring people together, celebrate milestones, and create lasting
              memories.
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/event2.png"
              width={600}
              height={816}
              alt="Event Image"
              className="rounded-tl-[40px] rounded-br-[40px]"
            />
          </div>
        </section>
        {/*  */}
        <section className="flex gap-5 justify-evenly py-[20px] px-[40px] mt-[80px]">
          <div>
            <Image
              src="/assets/images/event3.png"
              width={600}
              height={816}
              alt="Event Image"
              className="rounded-tl-[40px] rounded-br-[40px]"
            />
          </div>
          <div>
            <aside className="flex items-center gap-4">
              <div className="bg-[#624CF5] w-[4px] h-[40px]"></div>
              <h1 className="text-[#624CF5] text-[1.75rem] font-semibold">
                Our Vision
              </h1>
            </aside>
            <p className="text-[#1C1C1C] text-[1.25rem] font-normal text-justify max-w-[600px] mt-[20px]">
              Our vision is to be the leading event management company known for
              our innovative approach, exceptional service, and ability to
              create meaningful experiences. We aspire to set new standards in
              the industry, where every event we manage is a benchmark for
              excellence and creativity. At Evently, we envision a world where
              events are not just gatherings but transformative experiences that
              bring people together, celebrate milestones, and create lasting
              memories.
            </p>
          </div>
        </section>
      </article>

      {/* Our History */}
      <section className="mt-[80px] py-[20px] px-[100px]">
        <aside className="flex items-center gap-4 mb-[40px]">
          <div className="bg-[#624CF5] w-[4px] h-[40px]"></div>
          <h1 className="text-[#624CF5] text-[1.75rem] font-semibold">
            Our History
          </h1>
        </aside>
        <div className="text-[#1C1C1C] text-[1.25rem] font-normal text-justify flex flex-col gap-8 ">
          <p>
            Evently was born out of a deep passion for creating memorable
            experiences. Founded by a team of event enthusiasts with diverse
            backgrounds in event planning, hospitality, and design, Evently
            began as a small boutique agency focused on delivering personalized
            service to a select group of clients. Our founders, who each brought
            years of industry experience to the table, shared a common vision:
            to redefine what it means to create an event by focusing on the
            details that matter most.
          </p>
          <p>
            From our humble beginnings, we quickly gained a reputation for our
            creativity, reliability, and dedication to our clients. Word of
            mouth spread, and Evently began to grow, taking on larger projects
            and expanding our team of talented professionals. Despite our
            growth, we have remained true to our core values of personalized
            service and attention to detail. Every event, no matter how big or
            small, is treated with the same level of care and commitment.
          </p>
          <p>
            Over the years, we have had the privilege of working with a diverse
            range of clients, from individuals planning personal celebrations to
            businesses hosting corporate events. Each project has been an
            opportunity for us to innovate and refine our craft. Today, Evently
            stands as a leader in the event management industry, known for our
            ability to turn dreams into reality.
          </p>
          <p>
            As we look to the future, we are excited to continue our journey,
            constantly pushing the boundaries of what’s possible in event
            planning. Our team is dedicated to helping you create moments that
            are not only unforgettable but also perfectly reflect who you are
            and what you stand for.
          </p>
        </div>
      </section>

      {/* Questions */}
      <section className="mt-[80px] text-center flex flex-col gap-[40px] p-5">
        <h1 className="text-[#1C1C1C] text-[3.5rem] font-semibold leading-[67.77px]">
          Any question on your mind?
        </h1>
        <h2 className="text-[#1C1C1C] text-[2.5rem] font-medium">
          <span className="text-[#FA776C]">Contact Us </span>here so we can help
        </h2>
      </section>

      {/* Newsletter */}
      <section className="md:w-[75%] w-full dark:w-auto mx-auto bg-[#EDEFFF] dark:bg-[rgb(13,13,13)] mb-16 p-12 mt-10 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Subscribe to our Events Newsletter
        </h2>
        <p className="text-center text-base font-normal mb-10">
          Subscribe to our Newsletter so you don't miss new
          <br /> events, exclusive offers and premium discounts
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-md bg-[#DFE1FF] dark:bg-[#000000] border-blue-200 border"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-[#DFE1FF] dark:bg-[#000000] border-blue-200 border"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-auto bg-gradient-to-r from-[#624CF5] to-[#624CF5] text-white py-3 px-10 rounded-md hover:bg-indigo-900 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AboutPage;
