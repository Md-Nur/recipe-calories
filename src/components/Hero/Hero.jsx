import React from "react";

const Hero = () => {
  return (
    <section
      className="m-3 md:m-7 rounded-xl h-[80vh] text-white flex flex-col gap-5 justify-center items-center px-2 md:px-60 text-center"
      style={{
        backgroundImage: `url('./src/assets/banner.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-2xl md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p>
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding problems to become an exceptionally well
        world-class Programmer.
      </p>
      <div className="flex gap-3">
        <button className="btn btn-success">Explore Now</button>
        <button className="btn btn-outline text-white">Our feedback</button>
      </div>
    </section>
  );
};

export default Hero;
