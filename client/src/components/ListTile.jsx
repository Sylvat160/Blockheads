import React from "react";

const ListTile = ({ name, index, image, address, stakedAmount }) => {
  return (
    <div className="flex flex-start items-center content-center space-x-8 items-center">
      <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
        {index + 1}.
      </p>
      <img
        src={image}
        alt="campaign"
        className="w-[30px] h-[30px] object-cover rounded-[5px]"
      />
      <div className="flex flex-col justify-evenly">
        <p className="font-epilogue font-semibold text-[18px] text-[#b2b3bd] leading-[26px] break-ll">
          {name}
        </p>
        <p className="font-epilogue font-light text-[14px] text-[#b2b3bd] leading-[26px] break-ll">
          {address}
        </p>
      </div>
      <p className="font-epilogue font-semibold text-[18px] text-[#808191] leading-[26px] break-ll">
        {stakedAmount}
      </p>
    </div>
  );
};

export default ListTile;
