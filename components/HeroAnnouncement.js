import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroAnnouncement = ({ hero }) => {
  return (
    <div className="hidden lg:relative lg:block lg:bg-almostBlack lg:w-[990px] lg:h-[800px] lg:bg-desktopHero lg:bg-no-repeat lg:bg-right lg:bg-cover">
      {/* <h1 className="absolute top-[189px] left-[165px] mix-blend-exclusion font-black w-screen text-white font-bigShoulder uppercase text-headingL"> */}
      <motion.div
        key="announcement"
        initial={{ x: -600 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <div className="bg-shine-alpha absolute top-[88px] w-[590px] pt-4 pb-4">
          <h1 className="pl-[85px] font-black w-auto text-white font-bigShoulder uppercase text-headingS">
            {hero.heading.split('_').map((item, id) => {
              return (
                <Link key={`item-${id}`} href="/classes">
                  <span>
                    <span className="drop-shadow-3xl">{item}</span>
                    <br />
                  </span>
                </Link>
              );
            })}
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

HeroAnnouncement.propTypes = {};

export default HeroAnnouncement;
