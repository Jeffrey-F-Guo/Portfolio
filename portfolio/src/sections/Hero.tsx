"use client";
import Image from "next/image";
import face from "@/assets/images/headshot.png";
import DownArrow from "@/assets/icons/arrow-down.svg";
import { Scroll } from "@/components/ScrollToElement";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20">
            <div className="flex flex-col gap-6 max-w-xl animate-fade-in text-center lg:text-left">
              <div className="animate-slide-up">
                <span className="inline-block px-4 py-1.5 text-sm font-medium border border-black/20 rounded-full text-black/60">
                  Software Engineer
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-slide-up animation-delay-100">
                Hi, I&apos;m <br className="hidden lg:block" />
                <span className="relative">
                  Jeffrey Guo
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-black/10 rounded-full" />
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-black/60 animate-slide-up animation-delay-200 max-w-lg mx-auto lg:mx-0">
                Building intelligent systems & scalable applications. 
                Passionate about machine learning, full-stack development, 
                and creating tools that matter.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-slide-up animation-delay-300">
                <button 
                  onClick={() => {Scroll("projects")}}
                  className="inline-flex items-center border-2 border-black bg-black text-white px-8 h-12 rounded-xl gap-2 
                  font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  View Projects
                  <DownArrow className="size-5"/>
                </button>
                <a 
                  href="mailto:jeffrey.guo00703@gmail.com"
                  className="inline-flex items-center border-2 border-black/20 bg-white px-8 h-12 rounded-xl gap-2
                  font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 border-2 border-black/10 rounded-3xl" />
              <div className="absolute -inset-2 border border-black/5 rounded-3xl" />
              <Image
                src={face}
                className="w-[280px] h-auto rounded-3xl"
                alt="Jeffrey's face"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <DownArrow className="size-6 text-black/40" />
      </div>
    </section>
  );
};
