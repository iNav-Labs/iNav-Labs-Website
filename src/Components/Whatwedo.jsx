import React from "react";
import element1 from "../assets/element_1.png";
import image_2 from "../assets/image_2.png";

const Whatwedo = () => {
  return (
    <div className="bg-black min-h-screen" id="Whatwedo">
      <div className="flex flex-row ml-4 md:ml-10 mr-4 md:mr-10 p-6">
        <div className="md:w-1/2">
          <img
            src={element1}
            alt="element"
            className="md:w-[60px] md:h-[60px] w-[30px] h-[30px] mt-2"
          />
        </div>
        <div className="md:w-3/4 justify-end flex ml-20 mt-2">
          <h1 className="md:text-4xl text-xl font-LexendDeca text-white mr-10">
            What We Do?
          </h1>
        </div>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="text-white md:w-1/2 p-4 md:ml-4 md:mr-6">
          <p className="mt-3 text-lg">
            Welcome to iNav Labs, a pioneer in the realm of IoT, offering
            state-of-the-art solutions that redefine how we interact with
            technology in our daily lives.
          </p>
          <p className="mt-3 text-lg">
            With a primary focus on energy efficiency, the company's smart home
            products are designed to optimize resource usage and enhance overall
            sustainability.
          </p>
          <p className="mt-3 text-lg">
            In the industrial sector, iNav Labs streamlines processes by
            integrating intelligent solutions, increasing operational
            efficiency, and reducing costs. The company places a strong emphasis
            on maintaining the highest standards of quality, ensuring that its
            products not only meet but exceed industry benchmarks.
          </p>
          <p className="mt-3 text-lg">
            Security is a top priority at iNav Labs, recognizing the importance
            of safeguarding user data and privacy in an interconnected world.
            The implementation of robust security measures ensures that users
            can trust the reliability and integrity of the company's IoT
            solutions.
          </p>
          <button className="bg-white text-black font-LexendDeca w-full md:w-[250px] h-[60px] mt-5 rounded-full">
            <a
              href="https://www.linkedin.com/company/inavlabs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Know More
            </a>
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src={image_2}
            alt="image"
            className="w-full max-w-[400px] h-auto ml-0 md:ml-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
