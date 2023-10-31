import Image from "next/image";

import ButtonA from './ButtonA';
import HeroLogo from './HeroLogo';
import HeroAnnouncement from './HeroAnnouncement';
import HeroTestimonials from './HeroTestimonials';

import text from '../config/text.json';

export default function HeroSection() {
  const { hero } = text;
  return (
    <div className="sm:relative lg:flex bg-custom-stone overflow-hidden">
      <HeroAnnouncement hero={hero} />
      <HeroTestimonials hero={hero} />
      <HeroLogo hero={hero} />

      <div className="sm:hidden">
        <Image
          src="/mobile/image-hero.jpg"
          width={375}
          height={240}
          alt="hero image mobile"
          priority="true"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
      </div>
      <div className="hidden sm:block sm:w-100 sm:max-h-[10vh] lg:hidden">
        <Image
          src="/tablet/image-hero.jpg"
          width={437}
          height={100}
          alt="hero image tablet"
          priority="true"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover"
          }} />
      </div>
      <div className="flex flex-col px-4 py-10 sm:top-[5px] lg:hidden">
        <div className="mx-0 p-[0px] border-2 border-white mb-10 w-[290px]">
          <div className="ml-[20px] mt-[15px]">
            <Image
              src="/tablet/logo.png"
              width={250}
              height={95}
              // layout="responsive"
              alt="Latin Shine Dance Company - Tablet Logo"
              priority="true"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <h1 className="font-black w-screen text-white font-bigShoulder uppercase text-headingS md:text-headingS">
          {hero.headingMobile.split('_').map((item, id) => {
            return (
              <span key={`item-${id}`}>
                {item}
                <br />
              </span>
            );
          })}
        </h1>
        <div className="font-outfit text-white font-light text-bodyS py-8 sm:py-12 sm:w-[280px] md:w-[340px]">
          {hero.logoText.split('_').map((item, id) => {
            return <p key={`item-${id}`}>{item}</p>;
          })}
        </div>
        <ButtonA path="/location" title="Our Locations" />
        <br />
        <ButtonA path="/reserve" title="Reserve your spot" />
      </div>
    </div>
  );
}
