import { Button } from "@/@common/Button";
import Stats from "@/components/DonationCard/Stats";
import Image from "next/image";
import Link from "next/link";

const StatsSection = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 py-16">
        <Stats count="1M" text="Monthly Visitors" />
        <Stats count="20M" text="Volunteers Connected" />
        <Stats count="80" text="Countries Worldwide" />
        <Stats count="2M" text="Volunteers Needed" />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 py-5">
        <div>
          <div className="text-[#a9a9a9] mb-2 text-sm font-bold">
            HELP US STOP THE PROBLEM
          </div>
          <div className="text-[#3bcf93] text-4xl font-extrabold">
            We Need Your Help
          </div>
          <p className="text-lg leading-8 mt-4">
            Charities also began to adopt campaigning roles, where they would
            champion a cause and lobby the government for legislative change.
            This included organized campaigns against the ill treatment of
            animals and children and the campaign that eventually succeeded at
            the turn
          </p>
          <div className="space-x-2 mt-4">
            <Link href="/selectMode">
              <Button btnName="DONATE NOW" className="!px-7 !py-[10px]" />
            </Link>
            <Button btnName="VOLUNTEER" className="!px-7 !py-[10px]" />
          </div>
        </div>
        <div>
          <Image
            alt=""
            height={368}
            width={580}
            src="/Images/help.jpeg"
            className="w-full max-w-[580px] ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
