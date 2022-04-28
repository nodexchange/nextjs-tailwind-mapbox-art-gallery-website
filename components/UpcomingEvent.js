import ButtonPay from './ButtonPay';
// import WishIcon from './WishIcon';

const UpcomingEvent = ({ type, text, amount, children }) => {
  return (
    <div className="w-full lg:max-w-lg px-4 lg:px-0">
      <div className="p-3 bg-white rounded shadow-md">
        <div className="">
          <div className="relative w-full mb-3 h-62 lg:mb-0">
            <div className="absolute top-0 right-0 flex flex-col p-3">
              {/* <WishIcon /> */}
              {type}
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2018/02/25/07/15/food-3179853__340.jpg"
              alt="Just a flower"
              className="object-fill w-full h-full rounded"
            />
          </div>
          <div className="flex-auto p-2 justify-evenly">
            <div className="flex flex-wrap ">
              <div className="flex items-center justify-between w-full min-w-0 ">
                <h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900 ">
                  {text}
                </h2>
              </div>
            </div>
            <div className="mt-1 text-xl font-semibold">{amount}</div>
            <div className="mt-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
