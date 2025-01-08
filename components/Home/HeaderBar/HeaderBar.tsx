"use client";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState } from "react";
import Button from "@/components/UI/Button";
import Hamburger from "./Hamburger";
import Drawer from "@/components/UI/Drawer";
import Link from "next/link";

type Props = {
  dark?: boolean;
};

const HeaderBar: React.FC<Props> = ({ dark = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <header
        className={`${dark ? "bg-transparent" : "sticky top-0 z-50 bg-white shadow"}`}
      >
        <section
          className={`flex items-center justify-between py-4 ${dark ? "w-full" : "container w-full"}`}
        >
          <Hamburger dark={dark} toggleOpen={toggleOpen} />
          <Logo dark={dark} />
          <Navigation dark={dark} />
          <Link href="/contact">
            <Button
              bgColor={
                dark ? "bg-white text-black" : "bg-indigo-700 text-white"
              }
              name="Contact Us"
            />
          </Link>
        </section>
      </header>
      <Drawer open={isOpen} setOpen={setIsOpen}>
        <Navigation />
      </Drawer>
    </>
  );
};

export default HeaderBar;
