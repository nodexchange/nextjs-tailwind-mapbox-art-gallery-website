import SocialIcons from './SocialIcons';

const ReserveError = () => (
  <>
    <h1
      className="text-bodyM font-black uppercase font-bigShoulder"
      style={{ lineHeight: '1.5rem' }}>
      😪 Ooopss :-( Something went wrong!
    </h1>
    <br />
    <p>Our booking system encountered an error reserving your spot.</p>
    <br />
    <p>Don&apos;t worry you can still join our classes! 💃 🕺</p>
    <p>
      Contact us via email: latin_shine@outlook.com or visit our Facebook or Instagram to learn more about upcoming Dance classes
      and events.
    </p>
    <p>
      <SocialIcons />
    </p>
  </>
);

export default ReserveError;
