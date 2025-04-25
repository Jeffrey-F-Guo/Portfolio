"use client";
import Image from "next/image";
import face from "@/assets/images/headshot.png";
import DownArrow from "@/assets/icons/arrow-down.svg";
import {Scroll} from "@/components/ScrollToElement";
// import noise from "@/assets/images/grain.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="sm:py-16 md:py-20 lg:py-30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="flex flex-col gap-6 max-w-lg">
              <h1 className="text-5xl md:text-6xl font-bold mt-8">
                Hi there, I'm Jeffrey.
              </h1>
              <p className="mt-4 text-left text-black/70 md:text-lg">
              My passions lie in building intelligent systems, optimizing algorithms,
              and exploring AI’s potential to solve the problems in our world.
              Whether it’s improving efficiency, making information more accessible,
              or creating tools that help people in their everyday lives, I believe technology
              has the power to shape a better future—one line of code at a time.
              </p>
            </div>

            <Image
              src={face}
              className="w-[250px] h-auto rounded-3xl border"
              alt="Jeffrey's face"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center py-10">
              <button onClick={() => {Scroll("projects")}
              } className="inline-flex items-center border border-black/15 px-6 h-12 rounded-xl gap-1 mx-2 my-2 
                transform hover:scale-105 transition-transform duration-300">
                <span className="font-semibold">Explore my work</span>
                <DownArrow className="size-5"/>
              </button>
              <button onClick={() => {Scroll("about")}}
                className="inline-flex items-center bg-black text-gray-200 px-6 h-12 rounded-xl gap-1 mx-2 my-2 
                transition-transform duration-300 transform hover:scale-105">
                <span>👋</span>
                <span className="font-semibold">Lets Connect!</span>
              </button>
          </div>
        </div>
      </div>
    </section>

  );
};
