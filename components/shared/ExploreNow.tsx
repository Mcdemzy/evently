"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ExploreNow() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <section className="bg-[#EDEFFF] dark:bg-black py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
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
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            <Image
              src="/assets/images/hero.png"
              alt="hero"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default ExploreNow;
