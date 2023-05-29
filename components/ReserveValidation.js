const ReserveValidation = ({ validation }) => (
  <>
    {validation && (
      <>
        <br/>
        <p className="text-shine">{validation}</p>
      </>
    )}
  </>
);

export default ReserveValidation;
