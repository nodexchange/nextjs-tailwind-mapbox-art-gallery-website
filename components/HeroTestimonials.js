import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroTestimonials = ({ hero }) => {
  return (
    <div className='absolute top-[388px] w-[590px] pt-4 pb-4'>
    <motion.div
        key="announcement"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}>
          <h1 className="pl-[85px] font-black w-auto text-white font-bigShoulder uppercase text-headingS">
            {hero.comment.split('_').map((item, id) => {
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
      </motion.div>
      </div>
  )
}

HeroTestimonials.propTypes = {}

export default HeroTestimonials