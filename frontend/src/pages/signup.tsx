import NavbarComponent from "@/@common/Navbar/Navbar";
import Login from "@/Features/Login/Login";
import SignUp from "@/Features/Signup/SignUp";

const SignUpPage = () => {
  return (
    <div className="relative">
      <NavbarComponent isBg={1} hide={true} />
      <div className="lg:pt-[200px] pt-[420px]">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
