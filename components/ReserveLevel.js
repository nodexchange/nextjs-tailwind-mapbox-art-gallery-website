const ReserveLevel = ({checkboxHandler, completeBeginnerCheck}) => (
  <div className="form-check inline-block pt-4">
    <input
      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-shine checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
      type="checkbox"
      id="flexCheckChecked"
      onChange={checkboxHandler}
      defaultChecked={completeBeginnerCheck}
    />
    <label
      className="form-check-label block w-full pl-7 text-left text-white"
      htmlFor="flexCheckChecked">
      Leave this box checked if you are{' '}
      <span className="underline">a complete beginner</span> to
      Latin Dancing.
    </label>
  </div>
);

export default ReserveLevel;
