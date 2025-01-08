"use client";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const RightSection = ({ formTitle }: { formTitle?: string }) => {
  return (
    <div className="w-full lg:pr-[60px]">
      <h2 className="mb-5 font-gilroy-bold text-3xl font-medium text-black sm:text-[46px]">
        {formTitle ? formTitle : "Contact Us"}
      </h2>
      <section className="mb-5 flex w-full flex-col gap-3.5">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Subject" />
        <textarea
          rows={7}
          placeholder="Message"
          className="w-full rounded-[10px] border border-black px-9 py-6 font-gilroy-regular text-lg font-normal text-black placeholder:font-gilroy-regular placeholder:text-lg placeholder:font-normal placeholder:text-black"
        ></textarea>
      </section>
      <Button onClick={() => null} name="Send Message" />
    </div>
  );
};

export default RightSection;
