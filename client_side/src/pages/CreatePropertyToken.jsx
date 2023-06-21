import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButton, FormField } from "../components";
import { checkIfImage } from "../utils";

const CreatePropertyToken = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    propertyName: "",
    propertyLocation: "",
    propertyDescription: "",
    propertyValue: "",
    propertyBidDeadline: "",
    propertyImage: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.propertyImage, async (exists) => {
      if (exists) {
        setIsLoading(true);
        
        //place web3 method here
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, propertyImage: "" });
      }
    });
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {/* {isLoading && <Loader />} */}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Generate Asset Token
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Property Name *"
            placeholder="Blockhead Estate"
            inputType="text"
            value={form.propertyName}
            handleChange={(e) => handleFormFieldChange("propertyName", e)}
          />
          <FormField
            labelName="Location *"
            placeholder="Write Location of Asset"
            inputType="text"
            value={form.propertyLocation}
            handleChange={(e) => handleFormFieldChange("propertyLocation", e)}
          />
        </div>

        <FormField
          labelName="Description *"
          placeholder="Describe the state of property"
          isTextArea
          value={form.propertyDescription}
          handleChange={(e) => handleFormFieldChange("propertyDescription", e)}
        />
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Asset Valuation *"
            placeholder="HBAR 90"
            inputType="text"
            value={form.propertyValue}
            handleChange={(e) => handleFormFieldChange("propertyValue", e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.propertyBidDeadline}
            handleChange={(e) => handleFormFieldChange("propertyBidDeadline", e)}
          />
        </div>

        <FormField
          labelName="Asset Deed image *"
          placeholder="Place image URL of your asset deed"
          inputType="url"
          value={form.propertyImage}
          handleChange={(e) => handleFormFieldChange("propertyImage", e)}
        />

        <div className="flex justify-center items-center mt-[40px]">

          <CustomButton
            btnType="submit"
            title="Tokenize Deed"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePropertyToken;
