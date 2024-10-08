import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import NavItems from './NavItems';
import { HiMenuAlt3 } from 'react-icons/hi';

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <HiMenuAlt3
            width={28}
            height={28}
            className="cursor-pointer w-6 h-6"
          />
          {/* <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          /> */}
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 text-black dark:text-white bg-white dark:bg-black md:hidden">
          <div className="w-auto flex items-center">
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={50}
            alt="Evently logo"
          />
          <span className="ml-2 text-2xl font-bold">Evently</span>
          </div>
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
