import Link from 'next/link';

const ReserveSchedule = () => (
  <>
    <div className="font-light">
      <h1
        className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
        style={{ lineHeight: '1.5rem' }}>
        Our Weekly schedule
      </h1>
      <br />
      <h3 className="font-bold">Salsa Tuesdays (High Wycombe)</h3>
      <p>7PM - 8PM - Salsa LA (Crossbody on1) Beginners Class</p>
      <p>8PM - 9PM - Salsa LA (Crossbody on1) Improvers Class</p>
      <br />
      <h3 className="font-bold">Bachata Wednesdays (High Wycombe)</h3>
      <p>7PM - 8PM - Bachata Beginners Class</p>
      <p>8PM - 9PM - Bachata Improvers Class</p>
      <p>9PM - 10PM - Bachata & Salsa Social</p>
    </div>
    <br />
    <Link href="/location" className="underline text-white">
      Click here for our locations (venues & address) in High Wycombe.
    </Link>
  </>
);

export default ReserveSchedule;
