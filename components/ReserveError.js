import SocialIcons from './SocialIcons';

const ReserveError = () => (
  <>
    <h1
      className="text-bodyM font-black uppercase font-bigShoulder"
      style={{ lineHeight: '1.5rem' }}>
      😪 Ooopss :-( Something went wrong!
    </h1>
    <br />
    <p>Looks like there was an error reserving your spot.</p>
    <br />
    <p>Don&apos;t worry you can still join our classes! 💃 🕺</p>
    <p>
      Visit our Facebook or Instagram to learn more about upcoming Dance classes
      and events.
    </p>
    <p>
      <SocialIcons />
    </p>
  </>
);

export default ReserveError;
