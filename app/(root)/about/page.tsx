'use client';
import Image from 'next/image';
import React from 'react';
import NewsletterSubscription from '@/components/shared/NewsLetterSubscription';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutPage = () => {
  const [refAbout, inViewAbout] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [refWhatIs, inViewWhatIs] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [refVision, inViewVision] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [refHistory, inViewHistory] = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });

  return (
    <>
      {/* About Evently */}
      <section className="h-full flex flex-col items-center" ref={refAbout}>
        <h1 className="md:text-[3rem] text-2xl font-semibold text-center py-2 px-8 text-[#FA776C] md:mb-[40px] mb-5 md:mt-10 mt-4">
          About Evently
        </h1>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inViewAbout ? 1 : 0, x: inViewAbout ? 0 : -100 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex gap-8 flex-col items-center md:flex-row md:items-start md:justify-between md:gap-16 md:px-10 px-2"
        >
          <Image
            src="/assets/images/event.png"
            width={600}
            height={816}
            alt="Event Image"
            className="rounded-tl-[40px] rounded-br-[40px] w-full max-w-[600px] md:max-w-[627px] md:h-[570px] h-auto"
          />
          <div className="flex flex-col justify-center items-center text-center md:text-left w-auto h-full my-auto">
            <h2 className="text-[#624CF5] dark:text-white md:text-[2rem] text-lg font-medium md:text-left">
              Welcome To Evently
            </h2>
            <h3 className="font-medium md:text-[1.75rem] text-base md:leading-[70px] leading-none mb-4 md:text-left">
              Turning dreams into Extraordinary Events.
            </h3>
            <p className="font-normal md:text-[1.25rem] text-sm md:leading-10 leading-5 mx-auto md:mx-0 md:text-left">
              At Evently, we believe that every event tells a story—your story.
              Whether you’re celebrating a milestone, launching a product, or
              hosting a corporate gala, our mission is to bring your vision to
              life with creativity, precision, and a touch of magic. From
              intimate gatherings to large-scale celebrations, we handle every
              detail with care, ensuring that your event is not only successful
              but truly memorable.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What Is Evently */}
      <section
        className="bg-[#EDEFFF] dark:bg-[#0D0D0D] w-full py-16 px-4 sm:px-8 md:px-16 mt-10"
        ref={refWhatIs}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inViewWhatIs ? 1 : 0, y: inViewWhatIs ? 0 : -50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[#624CF5] dark:text-white md:text-[1.75rem] text-lg font-semibold leading-8 mb-4 text-center"
        >
          What is Evently?
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inViewWhatIs ? 1 : 0, y: inViewWhatIs ? 0 : 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="md:text-[1.25rem] text-sm leading-7 space-y-4 font-normal text-justify mx-auto max-w-4xl"
        >
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
        </motion.div>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-4 sm:px-8 md:px-16" ref={refVision}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inViewVision ? 1 : 0, y: inViewVision ? 0 : 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-start"
        >
          <div className="flex flex-col items-center md:items-start max-w-md">
            <aside className="flex items-center gap-4 mb-4">
              <div className="bg-[#624CF5] w-[4px] h-[40px]"></div>
              <h1 className="text-[#624CF5] md:text-[1.75rem] text-lg font-semibold">
                Our Vision
              </h1>
            </aside>
            <p className="text-[1.25rem] text-sm leading-7 font-normal text-justify">
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
          <Image
            src="/assets/images/event2.png"
            width={600}
            height={816}
            alt="Event Image"
            className="rounded-tl-[40px] rounded-br-[40px] w-full max-w-[600px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inViewVision ? 1 : 0, y: inViewVision ? 0 : 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center mt-16"
        >
          <Image
            src="/assets/images/event3.png"
            width={600}
            height={816}
            alt="Event Image"
            className="rounded-tl-[40px] rounded-br-[40px] w-full max-w-[600px]"
          />
          <div className="flex flex-col items-center md:items-start max-w-md">
            <aside className="flex items-center gap-4 mb-4">
              <div className="bg-[#624CF5] w-[4px] h-[40px]"></div>
              <h1 className="text-[#624CF5] md:text-[1.75rem] text-lg font-semibold">
                Our Vision
              </h1>
            </aside>
            <p className="md:text-[1.25rem] leading-7 text-sm font-normal text-justify">
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
        </motion.div>
      </section>

      {/* Our History */}
      <section className="py-16 px-4 sm:px-8 md:px-16" ref={refHistory}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: inViewHistory ? 1 : 0,
            y: inViewHistory ? 0 : 20,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <aside className="flex items-center gap-4 mb-8">
            <div className="bg-[#624CF5] w-[4px] h-[40px]"></div>
            <h1 className="text-[#624CF5] md:text-[1.75rem] text-lg font-semibold">
              Our History
            </h1>
          </aside>
          <div className="md:text-[1.25rem] leading-7 space-y-4 text-sm font-normal text-justify flex flex-col gap-8">
            <p>
              Evently was born out of a deep passion for creating memorable
              experiences. Founded by a team of event enthusiasts with diverse
              backgrounds in event planning, hospitality, and design, Evently
              began as a small boutique agency focused on delivering
              personalized service to a select group of clients. Our founders,
              who each brought years of industry experience to the table, shared
              a common vision: to redefine what it means to create an event by
              focusing on the details that matter most.
            </p>
            <p>
              From our humble beginnings, we quickly gained a reputation for our
              creativity, reliability, and dedication to our clients. Word of
              mouth spread, and Evently began to grow, taking on larger projects
              and expanding our team of talented professionals. Despite our
              growth, we have remained false to our core values of personalized
              service and attention to detail. Every event, no matter how big or
              small, is treated with the same level of care and commitment.
            </p>
            <p>
              Over the years, we have had the privilege of working with a
              diverse range of clients, from individuals planning personal
              celebrations to businesses hosting corporate events. Each project
              has been an opportunity for us to innovate and refine our craft.
              Today, Evently stands as a leader in the event management
              industry, known for our ability to turn dreams into reality.
            </p>
            <p>
              As we look to the future, we are excited to continue our journey,
              constantly pushing the boundaries of what’s possible in event
              planning. Our team is dedicated to helping you create moments that
              are not only unforgettable but also perfectly reflect who you are
              and what you stand for.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Questions */}
      <section className="mt-[80px] text-center flex flex-col gap-[40px] p-5">
        <h1 className="md:text-[3.5rem] text-2xl font-semibold md:leading-[67.77px] leading-normal">
          Any question on your mind?
        </h1>
        <h2 className="md:text-[2.5rem] text-xl font-medium">
          <span className="text-[#FA776C]">Contact Us</span> here so we can help
        </h2>
      </section>

      {/* Newsletter */}
      <section>
        <NewsletterSubscription />
      </section>
    </>
  );
};

export default AboutPage;
