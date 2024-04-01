import Image from 'next/image';
import ButtonA from './ButtonA';

export const AnnouncementBanner = () => {
  return (
    <section className="bg-black text-white px-8 py-10 md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
      <h2
        className="text-center text-bodyM font-black uppercase font-bigShoulder cursor-pointer pb-1"
        style={{ lineHeight: '1.5rem' }}>
        SPECIAL Salsa Spinning and Technique Workshop Announcement!
      </h2>
      <div className="flex justify-center">
      <a className="w-full h-auto max-h-[312px] sm:max-h-[110px] md:max-h-[200px] lg:max-h-[312px] xl:max-h-[312px]" target="_blank" href="/images/poster-banner-gil.jpg" rel="noopener noreferrer">
          <Image
            width={200}
            height={312}
            src="/images/poster-banner-gil.jpg"
            alt="Salsa Spinning and Technique Workshop with Gil Prado Mendez"
            className="w-full h-full object-contain"
          />
        </a>
        <div className="pt-2 mx-4 pl-4 my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
          <span>We are excited to announce our upcoming workshop with UK&apos;s MOST popular instructor{' '}</span>
          <span className='underline'>Gil Prado Mendez.</span>
          <span>{' '}On 20th of April, 2024, join us for a special fun-filled two-hour workshop. Location: Wycombe Community Arts Centre, Desborough Rd, High Wycombe HP11 2PU. Time: 2PM-4PM. Price: £25.00 per person.</span>
          <br/>
          <br/>
          <hr/>
          <br/>
          <span>Gil is well-known internationally for his creative and unique turn patterns and shines which he teaches with an absolute emphasis on technique and a sense of humour. He is a world championship level performer, having represented Mexico and Austria in numerous national and international highest-level competitions with co-member of Pexava Dance Company, Anke Obermayer. Limited spots available. Reserve your spot now!</span>
        </div>
      </div>
      <div className="flex justify-end">
      <ButtonA path="mailto:latin_shine@outlook.com?subject=Salsa Workshop with Gil - 20th April!" title="Reserve Workshop" target="_blank" />
      </div>
    </section>
  );
};