export const Button = ({
  btnName,
  className,
  onclick,
}: {
  btnName: string;
  className?: string;
  onclick?: () => void;
}) => {
  return (
    <button
      className={`${className} px-[16px] py-[8px] font-medium text-neutral-50 text-md duration-500 border-[2.4px] border-transparent hover:bg-[#3bcf93]/80 bg-[#3bcf93]`}
      onClick={onclick}
    >
      {btnName}
    </button>
  );
};
