import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-10 bg-gray-100 dark:bg-[rgb(13,13,13)]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={50}
            alt="Evently logo"
          />
          <span className="ml-2 text-2xl font-bold text-gray-800 dark:text-white">
            Evently
          </span>
        </Link>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href="/about"
            className="hover:text-gray-500 dark:hover:text-gray-300"
          >
            About Us
          </Link>
          <Link
            href="/events"
            className="hover:text-gray-500 dark:hover:text-gray-300"
          >
            Events
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-500 dark:hover:text-gray-300"
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#FA776C] p-2"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-6 h-6 text-[#FA776C] dark:hover:text-white hover:text-black transition-colors duration-300" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#FA776C] p-2"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6 text-[#FA776C] dark:hover:text-white hover:text-black transition-colors duration-300" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#FA776C] p-2"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 text-[#FA776C] dark:hover:text-white hover:text-black transition-colors duration-300" />
          </Link>
        </div>
      </div>
      <div className="mt-5 pt-4 text-center text-sm text-gray-700 dark:text-gray-300">
        <p>© 2024 Evently. All rights reserved.</p>
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
      </div>
    </footer>
  );
};

export default Footer;
