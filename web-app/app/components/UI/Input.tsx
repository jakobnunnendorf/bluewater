type Props = {
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
};

const Input: React.FC<Props> = ({
  type,
  placeholder,
  onChange,
  value,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-[10px] border border-black px-9 py-6 font-gilroy-regular text-lg font-normal text-black placeholder:font-gilroy-regular placeholder:text-lg placeholder:font-normal placeholder:text-black"
    />
  );
};

export default Input;
