import Image from 'next/image';
import Link from 'next/link';
import ButtonA from './ButtonA';
import HeroLogo from './HeroLogo';
import text from '../config/text.json';

export default function HeroSection() {
  const { hero } = text;
  return (
    <div className="sm:relative lg:flex bg-custom-stone overflow-hidden">
      <div className="hidden lg:relative lg:block lg:bg-almostBlack lg:w-[990px] lg:h-[800px] lg:bg-desktopHero lg:bg-no-repeat lg:bg-right lg:bg-cover">
        {/* <h1 className="absolute top-[189px] left-[165px] mix-blend-exclusion font-black w-screen text-white font-bigShoulder uppercase text-headingL"> */}
        <div className="bg-shine-alpha absolute top-[289px] w-[480px] pt-4 pb-4">
          <h1 className="pl-[85px] font-black w-auto text-white font-bigShoulder uppercase text-headingM">
            {hero.heading.split('_').map((item, id) => {
              return (
                <span key={`item-${id}`}>
                  <span className="lg:p-2 drop-shadow-3xl">
                    {item}
                  </span>
                  <br />
                </span>
              );
            })}
          </h1>
        </div>
      </div>
      <HeroLogo hero={hero} />

      <div className="sm:hidden">
        <Image
          src="/mobile/image-hero.jpg"
          width={375}
          height={240}
          layout="responsive"
          alt="hero image mobile"
          priority="true"
        />
      </div>
      <div className="hidden sm:block sm:w-3/5 lg:hidden">
        <Image
          src="/tablet/image-hero.jpg"
          width={437}
          height={700}
          layout="responsive"
          alt="hero image tablet"
          priority="true"
        />
      </div>
      <div className="px-4 py-10 sm:absolute sm:top-[5px] sm:left-1/2 lg:static lg:hidden">
        <div className="mx-0 p-[0px] border-2 border-white mb-10 w-[290px]">
          <div className="ml-[20px] mt-[15px]">
            <Image
              src="/tablet/logo.png"
              width={250}
              height={95}
              // layout="responsive"
              alt="Latin Shine Dance Company - Tablet Logo"
              priority="true"
            />
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
          {hero.logoWhite.split('_').map((item, id) => {
            return (
              <p key={`item-${id}`}>
                <Link href="/reserve">{item}</Link>
              </p>
            );
          })}
        </div>

        <ButtonA path="/location" title="Our Location" />
        <br />
        <ButtonA path="/reserve" title="Reserve your spot" />
      </div>
    </div>
  );
}
