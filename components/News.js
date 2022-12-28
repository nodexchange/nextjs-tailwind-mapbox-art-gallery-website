import Link from "next/link";
// import text from "../config/text.json";
import { Article } from './Article';


/* Reminder: No classes this week (Wed, 24/08) due to the summer break 💆💆‍♀️
We are back on the 31st of Aug. See you all then! */

export const News = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-courseImage text-white px-8 py-10 md:py-20 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
      <h2
        className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer pb-1"
        style={{ lineHeight: "1.5rem" }}
      >
        LATEST NEWS
      </h2>
      <hr />
      <Article header={(<>Wednesday, 28th December 2022 | Classes are on!</>)} body={(<>
        📣 Join us tonight for our last class of 2022! 📣
        We are back this week for more fun Bachata classes. 🕺💃
        <br />
        See you tonight!
      </>)} />
      <Article header={(<>Monday, 14th November 2022 | Reminder!</>)} body={(<>
        🎄🎄🎄 Early Winter break! 🎄🎄🎄
       Quick reminder to all of our students that this week (16th) it will be our last November class.
       <br />
       No classes on the 23rd & 30th of November.
       <br />
       We will resume on the 7th of December. See you all then!
      </>)} />
      <Article header={(<>Thursday, 29th September 2022 | October Classes!</>)} body={(<>
        💃🕺Interested in trying something new in October? 💃🕺
        Come learn Sensual Bachata which includes basic steps, dancing technique and shines and body movement in High Wycombe! 
        Our new complete beginner`s course starts this Wednesday! (4 Week course)
        🕖 Time: 7PM (beginners)
        📆 Date: 5th of October, 2022 (every Wednesday)
        📣 Price: £10 or £7 for students
        🔹 Venue: Guildhall (1st floor), High Street, High Wycombe
        ▶️ Details: https://fb.me/e/208mrMMqg
        No partner or prior dancing experience is necessary.
        Our Latin Shine community is growing every week ❤️ Come meet new people and have fun learning something new!
      </>)} />
      <Article header={(<>Tuesday, 6th September 2022 | Extended hours!</>)} body={(<>
        We are back this week with a new beginners course and new extended hours (📣) to add an additional hour of social dancing!
        Join us this week and practise with us. ❤️
        - Latin Shine Dance Company
      </>)} />
      <Article header={(<>Tuesday, 23rd August 2022 | Summer Break!</>)} body={(<>
        Reminder: No classes this week (Wed, 24/08) due to the summer break 💆💆‍♀️
We are back on the 31st of August, 2022. See you all then!
      </>)} />
      <p>------------</p>
      <Article header={(<>Tuesday, 2nd August 2022 | August Classes!</>)} body={(<><p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        💃🕺Interested in trying something new in August 🌤?
        Join us for our Latin #dance Bachata classes in #highwycombe.
        Our Latin Shine community is growing every week ❤️
        Come meet new people and have fun learning something new!
        New complete beginners course starts this Wednesday! (4 Week course)
        </p>
        <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        🕖 Time: 7PM (beginners)
        </p>
        <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        📆 Date: 3rd of August, 2022 (every Wednesday)
        </p>
        <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        📣 Price: £10 or £7 for students
        </p>
        <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        🔹 Venue: Guildhall (1st floor), High Street, High Wycombe
        </p>
        <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        ▶️ Details: 
          <a className="underline text-white" href="https://fb.me/e/3nBtbBFEi" target="_self">
            https://fb.me/e/3nBtbBFEi
          </a>
        </p>
        <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        No partner or prior dancing experience is necessary.
        Our instructors will guide you through basic steps, dancing technique, body movement and safety.
        </p></>)} />
      <p>------------</p>
      <Article header={(<>Wednesday, 6th July 2022 | BACHATA CLASSES IN HIGH WYCOMBE - EVERY WEDNESDAY!</>)} body={(<><p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
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
          You can view all of our upcoming events here: {' '}
          <a className="underline text-white" href='https://www.facebook.com/LatinShineDance/events'>Latin Shine Facebook Events</a>
        </p>
        <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
          Follow us on our {' '}
          <a className="underline text-white" href="https://www.facebook.com/LatinShineDance" target="_self">Facebook</a>
          {' '} or {' '}
          <a className="underline text-white" href="https://www.instagram.com/latinshinedance/" target="_self">Instagram</a>
          {' '} for more exciting news and events. 
        </p></>)} />
    </section>
  );
}
