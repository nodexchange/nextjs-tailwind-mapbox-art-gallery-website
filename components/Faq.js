import Link from "next/link";
import faq from "../config/faq.json";

export const Faq = () => {
  return (
    <section className=" bg-no-repeat bg-cover bg-aboutImage text-white px-8 py-10 md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
      <h2 className="font-black uppercase font-bigShoulder text-headingS lg:text-headingS md:mb-4">
        Frequently Asked Questions
      </h2>
      <hr />
      <ul>
        {faq.faq.map((question, id) => (
          <FaqSection key={`article-${id}`} {...question} />
        ))}
      </ul>
    </section>
  );
};

const FaqSection = ({ title, text, link, linkText, id }) => (
  <li className="mt-5">
    <h2 className="text-2xl font-semibold text-white">
      {id + 1}. {title}
    </h2>
    <p>{text}</p>
    {link && (
      <Link
        href={link}
        className="font-medium text-blue-400 dark:text-blue-400 hover:underline"
      >
        {linkText}
      </Link>
    )}
  </li>
);

/*
Frequently Asked Questions


2. Do I need a partner to join a class?

No partner is required to join our classes. We encourage individual sign-ups and facilitate partner rotation during the class.
3. What should I wear to a Latin dance class?

Comfortable clothing that allows for movement is recommended. For footwear, dance shoes or shoes with a smooth sole are ideal.
4. I'm a beginner. Will I be able to keep up?

Absolutely! Our beginner classes are designed to introduce the basics at a comfortable pace. Everyone is welcome, regardless of experience.
5. How long does it take to learn salsa/bachata?

The learning time varies depending on the individual. Consistent practice is key, and most students feel confident with the basics after a few classes.
6. Are there any age restrictions for joining the classes?

Our classes are open to adults of all ages. We do have age-specific classes for younger dancers as well.
7. Can I attend classes if I have no previous dance experience?

Yes, our beginner classes are perfect for those with no previous dance experience.
8. How do I sign up for a class?

You can sign up through our website or by contacting us directly via phone or email.
9. What is the cost of a class?

The cost varies depending on the type of class and package options. Please refer to our pricing page for detailed information.
10. Do you offer private lessons?

Yes, we offer private lessons for individuals or small groups. Please contact us for more details and scheduling.

*/
