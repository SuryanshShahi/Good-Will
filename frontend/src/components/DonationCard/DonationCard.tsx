import Image from "next/image";

interface ICard {
  image?: string;
  date?: string;
  author?: string;
  title?: string;
}

const DonationCard = (props: ICard) => {
  return (
    <div className="bg-white max-w-sm">
      <img src={props.image} height={217} width={384} alt="happening" />
      <div className="p-5">
        <div className="flex items-center tex-[#3bcf93] font-medium">
          <div>{props.date}</div>
          <span className="mx-2 text-xl">.</span>
          <div>{props.author}</div>
        </div>
        <p className="text-2xl font-bold">{props.title}</p>
      </div>
    </div>
  );
};

export default DonationCard;
