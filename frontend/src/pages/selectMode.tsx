import Footer from "@/@common/Footer/Footer";
import NavbarComponent from "@/@common/Navbar/Navbar";
import SelectMode from "@/Features/SelectMode/SelectMode";

const SelectPaymentMode = () => {
  return (
    <div className="relative">
      <NavbarComponent isBg={1} />
      <div className="lg:pt-[634px] pt-[420px]">
        <div className="lg:h-[900px]">
          <SelectMode />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default SelectPaymentMode;
