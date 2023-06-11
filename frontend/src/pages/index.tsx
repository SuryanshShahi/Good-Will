import NavbarComponent from "@/@common/Navbar/Navbar";
import Footer from "@/@common/Footer/Footer";
import DonateNow from "@/Features/HomePage/DonateNow";
import HappeningNow from "@/Features/HomePage/HappeningNow/HappeningNow";
import LandingPageCarousel from "@/Features/HomePage/LandingPageCarousel";
import MorePeople from "@/Features/HomePage/MorePeople";
import OurTeam from "@/Features/HomePage/OurTeam";
import SavePlants from "@/Features/HomePage/SavePlants";
import StatsSection from "@/Features/HomePage/StatsSection";

export default function Home() {
  return (
    <div className="relative">
      <NavbarComponent isBg={0} />
      <LandingPageCarousel />
      <SavePlants />
      <DonateNow />
      <MorePeople />
      <HappeningNow />
      <StatsSection />
      <OurTeam />
      <Footer />
    </div>
  );
}
