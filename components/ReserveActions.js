import ButtonC from './ButtonC';

const ReserveActions = ({ loading, reserve }) => (
  <>
    {loading ? (
      <p>
        <br />
        Reserving your class, Please wait...
      </p>
    ) : (
      <ButtonC title="Reserve" action={reserve} />
    )}
  </>
);

export default ReserveActions;
