import NavbarComponent from "@/@common/Navbar/Navbar";
import Footer from "@/@common/Footer/Footer";
import DonateNow from "@/features/homePage/DonateNow";
import LandingPageCarousel from "@/features/homePage/LandingPageCarousel";
import MorePeople from "@/features/homePage/MorePeople";
import SavePlants from "@/features/homePage/SavePlants";
import HappeningNow from "@/features/homePage/HappeningNow/HappeningNow";
import Stats from "@/features/homePage/StatsSection";
import OurTeam from "@/features/homePage/OurTeam";

export default function Home() {
  return (
    <div className="relative">
      <NavbarComponent />
      <LandingPageCarousel />
      <SavePlants />
      <DonateNow />
      <MorePeople />
      <HappeningNow />
      <Stats />
      <OurTeam />
      <Footer />
    </div>
  );
}
