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
        If you don&apos;t like online forms or you encountered an error, get in
        touch via email: latin_shine@outlook.com. You can also come and see us in person, our schedule and locations are
        listed below.
      </p>
    </>
  );
};

export default ReserveHeader;
