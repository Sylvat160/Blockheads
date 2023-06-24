import React from "react";

const ListTile = ({ notification }) => {
  return (
    <div className="flex justify-between content-center space-x-8 items-center w-full bg-[#1dc071] rounded-md p-4 text-white hover:scale-105 hover:text-black">
      <div className="flex flex-start items-center content-center space-x-8 items-center">
        <p className="font-epilogue font-normal text-[16px]  leading-[26px] break-ll">
          {notification.index}.
        </p>
        <img
          src={notification.image}
          alt="campaign"
          className="w-[50px] h-[50px] object-cover rounded-[5px]"
        />
        <div className="flex flex-col justify-evenly">
          <p className="font-epilogue font-semibold text-[18px] leading-[26px] break-ll">
            {notification.name}
          </p>
          <p className="font-epilogue font-light text-[14px] leading-[26px] break-ll">
            {notification.address}
          </p>
        </div>
      </div>
      <div>
        <p className="font-epilogue font-semibold text-[18px] leading-[26px] break-ll">
          {notification.amount}
        </p>
      </div>
    </div>
  );
};

export default ListTile;
