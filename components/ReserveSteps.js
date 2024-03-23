const titles = {
  0: 'Step 1 out of 3:',
  1: 'Step 2 out of 3:',
  2: 'Step 3 out of 3:'
}
const textOptions = {
  0: 'Please fill in your details below and click NEXT',
  1: 'Please select your preferred dance class, if you would like to attend both Salsa and Bachata, get in touch with our team after you reserve your spot.',
  2: 'Please select your current level, if you are not sure, you can speak to our instructors before your dance class',
  3: 'Confirmation'
}

const ReserveSteps = ({step0, step1, step2, step, children}) => {
  const items = [step0, step1, step2];
  const item = items[step];
  const title = titles[step];
  const text = textOptions[step];
  return (
    <div className='p-2'>
      <br />
      <p>{title}</p>
      <p>{text}</p>
      <div>
        {children}
      </div>
      {item}
    </div>
  );
}

export default ReserveSteps;
