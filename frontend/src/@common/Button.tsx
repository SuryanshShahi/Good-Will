export const Button = ({
  btnName,
  className,
  onclick,
  form,
  type,
  onsubmit,
}: {
  btnName: string;
  className?: string;
  form?: string;
  type?: any;
  onclick?: () => void;
  onsubmit?: any;
}) => {
  return (
    <button
      onSubmit={onsubmit}
      className={`${className} px-[16px] py-[8px] font-medium text-neutral-50 text-md duration-500 border-[2.4px] border-transparent hover:bg-[#3bcf93]/80 bg-[#3bcf93]`}
      onClick={onclick}
      form={form}
      type={type}
    >
      {btnName}
    </button>
  );
};
