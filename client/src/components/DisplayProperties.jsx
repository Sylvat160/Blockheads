import React from "react";
import { useNavigate } from "react-router-dom";
import { loader } from "../assets";
import { FundCard } from ".";

const DisplayProperties = ({ title, isLoading, properties }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/property-details/${campaign.title}`, { state: campaign });
  }
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({properties.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}
        {!isLoading && properties.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not added a property yet
          </p>
        )}

        {!isLoading &&
          properties.length > 0 &&
          properties.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayProperties;
