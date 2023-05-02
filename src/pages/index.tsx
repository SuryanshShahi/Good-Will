import LandingPageCarousel from "@/Features/HomePage/LandingPageCarousel";
import SavePlants from "@/Features/HomePage/SavePlants";
import DonateNow from "@/Features/HomePage/DonateNow";
import MorePeople from "@/Features/HomePage/MorePeople";
import HapenningNow from "@/Features/HomePage/HappeningNow/HappeningNow";
import NavbarComponent from "@/@common/Navbar/Navbar";
import Footer from "@/@common/Footer/Footer";

export default function Home() {
  return (
    <div className="relative">
      <NavbarComponent />
      <LandingPageCarousel />
      <SavePlants />
      <DonateNow />
      <MorePeople />
      <HapenningNow />
      <Footer/>
    </div>
  );
}
