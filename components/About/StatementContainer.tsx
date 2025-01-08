import Image from "next/image";

function StatementContiner({
  title,
  desc,
  imgSrc,
  flexDir = "lg:flex-row",
}: {
  title: string;
  desc: string[];
  flexDir?: string;
  imgSrc: string;
}) {
  return (
    <section className="py-36">
      <article
        className={`container flex flex-col-reverse items-center gap-12 max-lg:justify-center max-lg:text-center ${flexDir}`}
      >
        <div className="">
          <Image src={imgSrc} width={577} height={365} alt="model" />
        </div>
        <div className="mr-auto w-full max-w-[684px]">
          <header className="flex flex-col gap-2.5">
            <h2 className="font-gilroy-regular text-3xl font-medium uppercase leading-none text-black min-[477px]:text-5xl sm:text-[56px]">
              {title}
            </h2>
            <div className="flex flex-col gap-6">
              {desc.map((text, idx) => (
                <p
                  key={idx}
                  className="font-gilroy-regular text-xs font-normal text-black sm:text-sm md:text-lg"
                >
                  {text}
                </p>
              ))}
            </div>
          </header>
        </div>
      </article>
    </section>
  );
}

export default StatementContiner;
