type Props = {};

const CoreServicesCard = ({
  title,
  desc,
  listTitle,
  listItems,
  gridColsStyle,
}: {
  title: string;
  desc: string;
  listTitle: string;
  listItems: string[];
  gridColsStyle?: string;
}) => {
  return (
    <article
      className={`rounded-[40px] border border-[#2F3542] px-9 py-8 ${gridColsStyle}`}
    >
      <h2 className="w-full max-w-[531px] font-gilroy-medium text-[30px] font-normal text-[#111827]">
        {title}
      </h2>
      <p className="font-gilroy-regular text-lg font-normal text-[#6A6A6A]">
        {desc}
      </p>
      <div className="mt-4">
        <h3 className="font-gilroy-medium text-2xl font-normal text-primary-orange">
          {listTitle}
        </h3>
        <ul className="flex list-inside list-disc flex-col gap-4 font-gilroy-regular text-lg font-normal text-[#6A6A6A]">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default CoreServicesCard;
