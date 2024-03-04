import React from "react";
import gif1 from "../assets/areaofexpertise_1.gif";
import gif2 from "../assets/areaofexpertise_2.gif";
import gif3 from "../assets/areaofexpertise_3.gif";
import element1 from "../assets/element_1.png";

const areaOfExpertiseData = [
  {
    imageSrc: gif2,
    buttonText: "Autonomous",
  },
  {
    imageSrc: gif1,
    buttonText: "Robotics",
  },
  {
    imageSrc: gif3,
    buttonText: "Surveillance",
  },
];

const ExpertiseCard = ({ imageSrc, buttonText }) => (
  <div className="max-w-md mx-auto shadow-lg overflow-hidden mb-16 p-4 md:p-0 transform transition-transform hover:scale-105">
    <img
      className="w-full h-[200px] md:h-[250px] object-cover mb-2"
      src={imageSrc}
      alt="Expertise Image"
    />
    <div className="text-center">
      <button className="border-2 border-white text-white font-LexendDeca py-2 px-4 w-full rounded-full">
        {buttonText}
      </button>
    </div>
  </div>
);

const AreaofExpertise = () => {
  return (
    <div className="bg-black" id="service">
      {" "}
      {/* Added class and set height to 100% */}
      <div className="flex md:flex-row ml-4 md:ml-10 mr-4 md:mr-10 py-10">
        <div className="flex text-white w-full md:w-1/2">
          <h1 className="md:text-4xl text-2xl font-LexendDeca ml-8">
            Area of Expertise
          </h1>
        </div>
        <div className="flex justify-end md:w-1/2">
          <img
            src={element1}
            className="md:w-[60px] md:h-[60px] w-[30px] h-[30px]"
            alt="Element"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-2">
        {areaOfExpertiseData.map((expertise, index) => (
          <ExpertiseCard key={index} {...expertise} />
        ))}
      </div>
    </div>
  );
};

export default AreaofExpertise;
