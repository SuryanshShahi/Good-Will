export const Button = ({ name, bgColor, color, border }: any) => {
  return (
    <>
      <button
        className={`px-4 py-2 font-medium ${color || "text-white"} ${
          border || ""
        } text-sm ${bgColor || "bg-green-400"}`}
      >
        {name}
      </button>
    </>
  );
};
