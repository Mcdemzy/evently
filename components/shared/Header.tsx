import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';
import { buttonVariants } from '../ui/button';
import ThemeToggle from '../ThemeToggle';
import CustomUser

const Header = () => {
  return (
    <header className="w-full shadow-md dark:shadow-[#313131] sticky top-0 bg-white dark:bg-black bg-opacity-[0.97] z-10">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-auto flex items-center">
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={50}
            alt="Evently logo"
          />
          <span className="ml-2 text-2xl font-bold">Evently</span>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end items-center gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className={buttonVariants({ variant: 'login', size: 'lg' })}
            >
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button
              asChild
              className={buttonVariants({ variant: 'signup', size: 'lg' })}
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
