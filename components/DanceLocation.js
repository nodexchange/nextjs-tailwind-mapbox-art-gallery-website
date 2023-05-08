import React from 'react';

export const DanceLocation = ({ copy }) => {
  return (
    <div id={copy.id}>
      <div className="px-4 py-10 bg-almostBlack md:px-8 lg:px-30 xl:px-40 md:py-24 md:flex md:space-x-24 lg:justify-between">
        <h1 className="mt-5 mb-12 font-black text-white uppercase font-bigShoulder text-headingM md:text-headingMM lg:text-headingL lg:w-350 md:mt-0">
          {copy.title}
        </h1>
        <div className="space-y-7 lg:w-2/5">
          <h4 className="font-black uppercase font-bigShoulder text-shine text-headingXS">
            {copy.street}
          </h4>
          <div className="space-y-1 font-light text-white font-outfit text-bodyS">
            <div className="my-5">
              <p>{copy.body1}</p>
              <p>{copy.body2}</p>
              <p>{copy.body3}</p>
              <p>{copy.body4}</p>
            </div>
            <p className="my-8">{copy.description}</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 bg-white md:px-8 lg:px-30 xl:px-40 md:py-24 md:flex md:space-x-24 lg:justify-between">
        <h1 className="mt-5 mb-12 font-black text-almostBlack uppercase font-bigShoulder text-headingM md:text-headingMM lg:text-headingL lg:w-350 md:mt-0">
          {copy.gettingHere}
        </h1>
        <div className="space-y-7 lg:w-2/5">
          <h4 className="font-black uppercase font-bigShoulder text-shine text-headingXS">
            {copy.byCar}
          </h4>
          <div className="space-y-1 font-light text-almostBlack font-outfit text-bodyS">
            <div className="my-5">
              <p>{copy.byCarText}</p>
            </div>
          </div>
          <h4 className="font-black uppercase font-bigShoulder text-shine text-headingXS">
            {copy.byTrain}
          </h4>
          <div className="space-y-1 font-light text-almostBlack font-outfit text-bodyS">
            <div className="my-5">
              <p>{copy.byTrainText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
