import {Card} from "@/components/Card";
export const AboutSection = () => {
  return (
    <div className="container mb-96 py-16 lg:py-20">
      <h1 className="text-5xl flex justify-center items-center font-bold m-4">About Me</h1>
      <h2 className="flex justify-center items-center m-4">A Glimpse Into My World!</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <Card className="px-8 p-4 md:pt-12 md:px-10 lg:p-8 lg:px-20">
          <div>
            <h3 className="text-2xl font-semibold">Useful Links</h3>
            <p>Learn more about me or contact me!</p>
          </div>

          <div className="flex flex-col gap-5 mt-5">
            <a href="#" className="border border-black/15">
              <span>My Resume</span>
            </a>
            <a href="https://www.linkedin.com/in/jeffrey-f-guo" className="border border-black/15">
              <span>My LinkedIn</span>
            </a>
            <a href="# " className="border border-black/15">
              <span>My GitHub</span>
            </a>
            <a href="mailto:jeffrey.guo00703@gmail.com" className="border border-black/15">
              <span>My Email</span>
            </a>
          </div>
        </Card>

        <Card className="px-8 p-4 md:pt-12 md:px-10 lg:p-8 lg:px-20">
          <h3 className="text-2xl font-semibold">My Toolbox</h3>
        </Card>
      </div>
    </div>
  );

};
