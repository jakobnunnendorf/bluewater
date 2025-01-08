"use client";
import Logo from "@/app/components/LayoutComponents/HeaderBar/Logo";
import Navigation from "@/app/components/LayoutComponents/HeaderBar/Navigation";
import { useState } from "react";
import Button from "../../UI/Button";
import Hamburger from "./Hamburger";
import Drawer from "../../UI/Drawer";

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
          <Button
            bgColor={isBg ? "bg-indigo-700 text-white" : "bg-white text-black"}
            name="Contact Us"
            onClick={() => {}}
          />
        </section>
      </header>
      <Drawer open={isOpen} setOpen={setIsOpen}>
        <Navigation hiddenNavStyles="" />
      </Drawer>
    </>
  );
};

export default HeaderBar;
