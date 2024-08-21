'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  return (
    <footer
      ref={ref}
      className="relative py-10 bg-gray-100 dark:bg-[rgb(13,13,13)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FA776C] to-[#FBD67B] opacity-10 -z-10 animate-pulse"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={50}
            alt="Evently logo"
          />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="ml-2 text-2xl font-bold text-gray-800 dark:text-white"
          >
            Evently
          </motion.span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <Link href="/about" className="hover:text-gray-500 dark:hover:text-gray-300">About Us</Link>
          <Link href="/events" className="hover:text-gray-500 dark:hover:text-gray-300">Events</Link>
          <Link href="/contact" className="hover:text-gray-500 dark:hover:text-gray-300">Contact</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          className="flex gap-4"
        >
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='rounded-full border border-[#FA776C] p-2' aria-label="Facebook">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 text-[#FA776C] dark:hover:text-white hover:text-black transition-colors duration-300"
            >
              <FaFacebookF />
            </motion.div>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='rounded-full border border-[#FA776C] p-2' aria-label="Twitter">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 text-[#FA776C] dark:hover:text-white hover:text-black transition-colors duration-300"
            >
              <FaTwitter />
            </motion.div>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='rounded-full border border-[#FA776C] p-2' aria-label="Instagram">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 text-[#FA776C] dark:hover:text-white hover:text-black transition-colors duration-300"
            >
              <FaInstagram />
            </motion.div>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
        className="mt-5 pt-4 text-center text-sm text-gray-700 dark:text-gray-300"
      >
        <p>© 2023 Evently. All rights reserved.</p>
        <p>
          Designed and created by{" "}
          <a
            href="https://the4coders.com"
            className="font-bold text-[#FA776C] hover:underline dark:text-[#FA776C]"
          >
            The4Coders
          </a>
          .
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
