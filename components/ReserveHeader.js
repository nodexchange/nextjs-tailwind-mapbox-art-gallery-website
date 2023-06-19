import Link from 'next/link';

const ReserveHeader = () => {
  return (
    <>
      <header>
        <h1
          className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
          style={{ lineHeight: '1.5rem' }}>
          Reserve your spot (no payment needed)
        </h1>
      </header>
      <br />

      <p className="font-light">
        Please complete the form to reserve. Our team will be in touch to confirm.
      </p>
      <br />
      <p>
        This is optional. If you don&apos;t like online forms or you encountered an error, get in
        touch via email: <Link id="email_us_text" className="hover:underline hover:text-shine" href="mailto:latin_shine@outlook.com?subject = Reserve&body = Hi Latin Shine,">
            latin_shine@outlook.com
          </Link>. You can also come and see us in person, our schedule and locations are
        listed below.
      </p>
    </>
  );
};

export default ReserveHeader;
