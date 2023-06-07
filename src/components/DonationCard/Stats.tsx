import Image from "next/image";
interface IStats {
  count: string;
  text: string;
}

const Stats = (props: IStats) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="z-[1] text-6xl font-extrabold mb-3">{props.count}</div>
      <div className="z-[1] text-lg">{props.text}</div>
      <Image
        src="/Images/hp3-counter-divider.png"
        className="mt-7"
        alt="wave"
        height={15}
        width={46}
      />
      <div className="bg-green-200/30 text-green-200/30 w-20 h-20 rounded-full absolute top-10">
        .
      </div>
    </div>
  );
};

export default Stats;
