
export const AboutSalsa = ({full}) => {
  return (
    <main className="text-left bg-almostBlack text-white px-8 py-10 md:py-20 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
      { full === "true" && (
        <>
          <h2 className="font-black uppercase font-bigShoulder text-headingS lg:text-headingS md:mb-4">
            About Salsa
          </h2>
          <p>
            Salsa dance is entirely inclusive and appropriate for all ages and skill levels. Salsa is a fantastic way to stay in shape, meet new people, make friends, challenge yourself, and find a passion you did not know you had—so it is much more than simply dancing courses! While having fun, work on your balance, coordination, fitness level, and fluidity of movement. Salsa lessons may help you get the self-assurance you need, break routines, and unwind from the fast-paced modern world. Salsa dancing is a very well-liked and successful approach to reduce stress and enhance your mental health. Our students frequently share with us how learning salsa has favourably impacted their life.
          </p>
          <br />
          <p>
            In addition to providing physical exercise, Latin dancing is a fantastic opportunity to meet new people. Salsa dance is a vital component of the culture and social life of Latin America. Salsa dancing enables individuals to express themselves freely, foster their creativity, and set off on an exhilarating path of partner dance self-discovery.
          </p>
          <br />
        </>
      )}
      <h3 className="font-black uppercase font-bigShoulder text-headingS lg:text-headingS md:mb-4">
        What is LA-Style Salsa (Crossbody on1)?
      </h3>
      <p>
        LA-style salsa is the style of salsa dancing popularized in Los Angeles and is one of the most popular forms of salsa dancing in the world. It is danced in the slot, similar to New York-style salsa but is distinguished for being danced on1 rather than on2.
      </p>
      <br />
      <p>
        Originally, LA-style salsa had a reputation for being showy with flashy moves and big tricks, and was popularized by the Vazquez Brothers (Luiz Vazquez, Francisco Vazquez, and Johny Vazquez) who were exemplars of that style.
      </p>
      <br />
      <p>
        However, more recently, people have come to use the term “LA-style” salsa synonymously with “on1 salsa”, referring to the timing of the dance rather than a particular dance style.
      </p>
      <br />
      <p>Ref: <a href='https://www.salsavida.com/salsa-dance-terms/la-style-salsa-on-1/'>https://www.salsavida.com/</a></p>
    </main>
  );
};
