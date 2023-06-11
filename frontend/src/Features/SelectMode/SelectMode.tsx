import PaymentMode from "./components/PaymentMode";
import Banner from "./components/Banner";
import Form from "./components/Form";

const SelectMode = () => {
  return (
    <div className="h-full">
      <div className="bg-[#3bcf93] w-full py-16 h-[300px] z-10 lg:block hidden">
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-3">
            <Banner />
          </div>
          <div className="col-span-2 mr-9">
            <PaymentMode />
          </div>
        </div>
      </div>
      <div className="lg:hidden block mb-4">
        <div className="mx-2">
          <PaymentMode />
        </div>
        <div className="bg-[#3bcf93] p-16">
          <Banner />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default SelectMode;
