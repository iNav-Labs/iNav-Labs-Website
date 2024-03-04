import React from "react";
import lines_1 from "../assets/lines_1.png";
import lines_2 from "../assets/lines_2.png";
import image_3 from "../assets/image_3.png";
import inavlabstext from "../assets/inavlabstext.png";
import founder from "../assets/founder.png";
import cofounder from "../assets/co-founder.png";
import mentor_1 from "../assets/mentor_1.png";
import mentor_2 from "../assets/mentor_2.png";
import SSIP from "../assets/ssip.png";

export default function AfterWhatWeDo() {
  return (
    <div>
      <img
        src={image_3}
        alt="battery image"
        className="rotate-180 w-64 h-64 mx-auto"
      />

      <div style={{ position: "relative" }}>
        <img src={lines_1} alt="line1" className="z-0 w-[200px] md:w-[600px]" />
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <h1 className="text-sm md:text-5xl mt-28 pl-2 font-bold md:mt-40">
            Experience the Array of <br /> Autonomous Tech at
          </h1>
          <img
            src={inavlabstext}
            alt="inavlab text"
            style={{ display: "block", margin: "0 auto", zIndex: 1 }}
            className="mt-12"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "50px",
          overflowX: "hidden",
          position: "relative",
        }}
        className=""
      >
        <img
          src={lines_2}
          alt="lines"
          className="z-0 w-[150px]  md:w-[600px]"
        />
      </div>
      <hr
        style={{ borderColor: "#555", borderWidth: "2px", width: "50%" }}
        className="my-4 mx-auto"
      />
      <h1 className="font-medium text-3xl md:text-5xl text-center mt-8">
        Our Team
      </h1>
      <div className="container mx-auto my-20" id="team">
        <div className="flex flex-wrap justify-center">
          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img src={founder} alt="founder image" className="w-32 h-32 mb-1" />
            <p className="text-xs mt-1 font-semibold">ANUJ PATEL</p>
            <p className="text-xs mt-1 text-green-500">FOUNDER</p>
          </div>
          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img
              src={cofounder}
              alt="co-founder image"
              className="w-32 h-32 mb-1"
            />
            <p className="text-xs mt-1 font-semibold">KEVAL PANWALA</p>
            <p className="text-xs mt-1 text-green-500">CO-FOUNDER</p>
          </div>
          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img src={mentor_1} alt="mentor image" className="w-32 h-32 mb-1" />
            <p className="text-xs mt-1 font-semibold">DR. SHAKTI MISHRA</p>
            <p className="text-xs mt-1 text-green-500">MENTOR</p>
          </div>
          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img src={mentor_2} alt="mentor image" className="w-32 h-32 mb-1" />
            <p className="text-xs mt-1 font-semibold">SOHAM VYAS</p>
            <p className="text-xs mt-1 text-green-500">MENTOR</p>
          </div>
        </div>
      </div>
      <img src={SSIP} alt="sspi image" className="mx-auto mb-10" />
    </div>
  );
}
