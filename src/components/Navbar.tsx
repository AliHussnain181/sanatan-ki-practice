"use client"
import React from "react";
import { FiAlignRight } from "react-icons/fi";
import { ModeToggle } from "./ThemeToggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Name from "./Home/name";


const Navbar = () => {
  

  return (
    <>
      <nav className=" flex justify-between items-center h-20 px-6 border-b-[1px] border-gray-200  ">
      <Name/>
        <div className=" flex items-center space-x-10">
          <div>
            <ModeToggle />
          </div>
          <div>
            <Popover>
              <PopoverTrigger><FiAlignRight size={24} /></PopoverTrigger>
              <PopoverContent className="flex flex-col space-y-4 my-7 ">
              <Link className="hover:text-[#F38411]" href={'/'}>Home</Link>
              <Link className="hover:text-[#F38411]" href={'/practice'}>Practice Section</Link>
              <Link className="hover:text-[#F38411]" href={'/movies'}>sanatan Movies</Link>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
