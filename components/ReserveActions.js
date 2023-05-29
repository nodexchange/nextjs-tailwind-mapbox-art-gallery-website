import ButtonC from './ButtonC';
import ButtonD from './ButtonD';

const textOptions = {
  0: 'Next: Your Class',
  1: 'Next: Your Level',
  2: 'Next: Submit'
}
const ReserveActions = ({ loading, backHandler, stepHandler, step }) => { 
  const text = textOptions[step];
  return (
  <>
    {loading ? (
      <p>
        <br />
        Reserving your class, Please wait...
      </p>
    ) : (
      <div className={`flex ${step >= 1 ? 'justify-between' : 'justify-end'}`}>
        {step >= 1 && (<ButtonD title={'Back'} action={backHandler} path='#' />)}
        <ButtonC title={text} action={stepHandler} />
      </div>
    )}
  </>
)};

export default ReserveActions;
