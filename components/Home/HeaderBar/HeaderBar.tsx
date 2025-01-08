"use client";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState } from "react";
import Button from "@/components/UI/Button";
import Hamburger from "./Hamburger";
import Drawer from "@/components/UI/Drawer";
import Link from "next/link";

type Props = {
  isBg?: boolean;
};

const HeaderBar: React.FC<Props> = ({ isBg = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <header
        className={`${isBg ? "sticky top-0 z-50 bg-white shadow" : "bg-transparent"}`}
      >
        <section
          className={`flex items-center justify-between py-4 ${isBg ? "container w-full" : "w-full"}`}
        >
          <Hamburger isBg={isBg} toggleOpen={toggleOpen} />
          <Logo isBg={isBg} />
          <Navigation isBg={isBg} />
          <Link href="/contact">
            <Button
              bgColor={
                isBg ? "bg-indigo-700 text-white" : "bg-white text-black"
              }
              name="Contact Us"
            />
          </Link>
        </section>
      </header>
      <Drawer open={isOpen} setOpen={setIsOpen}>
        <Navigation hiddenNavStyles="" />
      </Drawer>
    </>
  );
};

export default HeaderBar;
