import NavbarComponent from "@/@common/Navbar/Navbar";
import Login from "@/Features/Login/Login";

const Profile = () => {
  return (
    <div className="relative">
      <NavbarComponent isBg={1} hide={true} />
      <div className="lg:pt-[534px] pt-[420px]">
        <Login />
      </div>
    </div>
  );
};

export default Profile;
