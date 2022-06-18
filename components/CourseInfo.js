import Link from "next/link";
import text from "../config/text.json";

export const CourseInfo = () => {
  const { footer } = text;
  return (
    <section className="bg-no-repeat bg-cover bg-courseImage text-white px-8 py-10 md:py-20 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
      <h2
        className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer pb-1"
        style={{ lineHeight: "1.5rem" }}
      >
        BACHATA CLASSES IN HIGH WYCOMBE - EVERY WEDNESDAY!
      </h2>
      <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        We are teaching Bachata Sensual classes at the High Wycombe Guildhall (High Street). Classes are taught by two of our instructors Alyssa and Martin to represent Sensual Style dynamics of followers and leaders.
      </p>
      <br/>
      <p className="my-0 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Complete beginner starts at 7pm. The improver class starts at 8pm. You will learn the basics of Bachata sensual, dancing technique, and partner work.
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Partners are not required!
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Beginners are welcome!
      </p>
      <br />
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Price: £10 per person, (£7 for student with the valid NUS/University card).
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Date: Every Wednesday.
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Time: 7pm - 9pm
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Venue: {' '}
        <Link href='/location' passHref>
          <a className="underline text-white">Guildhall (High Street), High Wycombe.</a>
        </Link>
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Follow us on our {' '}
        <a className="underline text-white" href="https://www.facebook.com/LatinShineDance" target="_self">Facebook</a>
        {' '} or {' '}
        <a className="underline text-white" href="https://www.instagram.com/latinshinedance/" target="_self">Instagram</a>
        {' '} for more exciting news and events. 
      </p>
    </section>
  );
}
