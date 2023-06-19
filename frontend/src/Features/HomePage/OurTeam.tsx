import React from "react";
import MemberCard from "./MemberCard";

const OurTeam = () => {
  const userData = [
    {
      title: "Suryansh Shahi",
      designation: "Frontend Developer",
      linkedIn: "/",
      caption: "xyz",
      image: "/Images/help.jpeg",
      subtitle: "asdsd",
      description: "asdasdasd",
      modalTitle: "asdsaddddas",
    },
    {
      title: "Ritviz Mishra",
      designation: "Blockchain Developer",
      linkedIn: "/",
      caption: "xyz",
      image: "/Images/help.jpeg",
      subtitle: "asdsd",
      description: "asdasdasd",
      modalTitle: "asdsaddddas",
    },
    {
      title: "Shivanshu Singh",
      designation: "Backend Developer",
      linkedIn: "/",
      caption: "xyz",
      image: "/Images/help.jpeg",
      subtitle: "asdsd",
      description: "asdasdasd",
      modalTitle: "asdsaddddas",
    },
  ];
  return (
    <div className="happening-bg pt-28 pb-10">
      <div className="font-bold text-center mb-3 text-md text-green-200 opacity-70">
        ALL VOLUNTEERS
      </div>
      <div className="font-bold text-center text-5xl text-white">Our Team</div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-16 gap-x-2 place-items-center my-20">
        {userData.map((e) => (
          <MemberCard
            title={e.title}
            designation={e.designation}
            linkedIn={e.linkedIn}
            caption={e.caption}
            image={e.image}
            subtitle={e.subtitle}
            description={e.description}
            modalTitle={e.modalTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
