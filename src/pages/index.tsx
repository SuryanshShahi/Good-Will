import LandingPageCarousel from "@/Features/HomePage/LandingPageCarousel";
import SavePlants from "@/Features/HomePage/SavePlants";
import NavbarComponent from "@/Features/Navbar/Navbar";
import DonateNow from "@/Features/HomePage/DonateNow";
import MorePeople from "@/Features/HomePage/MorePeople";
import HapenningNow from "@/Features/HomePage/HappeningNow/HappeningNow";

export default function Home() {
  return (
    <div className="relative">
      <NavbarComponent />
      <LandingPageCarousel />
      <SavePlants />
      <DonateNow />
      <MorePeople />
      <HapenningNow />
    </div>
  );
}
