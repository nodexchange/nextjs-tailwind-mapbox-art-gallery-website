import Link from "next/link";
import text from "../config/text.json";

export const About = () => {
  const { about } = text;
  return (
    <section className=" bg-shine text-white px-8 py-10 md:py-20 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
      <div className="block lg:flex">
        <div className="block w-full h-[300px] relative pb-10 md:w-[500px]">
        <video controls className="w-auto h-[300px] absolute top-0 left-0 sm:w-[320px] md:w-full lg:w-auto">
          <source src="/about.mp4" />
        </video>
        </div>
        <div className="w-[100%] px-4 pt-10 md:pt-2 lg:w-[70%]">
          <h2 className="font-black uppercase font-bigShoulder text-headingS lg:text-headingS md:mb-4">
            What is Bachata Sensual?
          </h2>
          <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
            {about.first}
          </p>
          <br />
          <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
            {about.second}
          </p>
          <br />
          <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
            {about.third}{" "}
            <Link href={about.link} passHref>
              <a target="_self">
                {about.link}
              </a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
