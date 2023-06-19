import NavbarComponent from "@/@common/Navbar/Navbar";
import UserProfile from "@/Features/UserProfile";

const Profile = () => {
  return (
    <div className="relative">
      <NavbarComponent isBg={1} />
      <div className="lg:pt-[634px] pt-[420px]">
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
