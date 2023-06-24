import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { Loader } from "../components";

import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButton, FormField } from "../components";
import { checkIfImage } from "../utils";

const Kyc = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { makeKyc, deployC } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    city: "",
    country: "",
    identityCard: ""
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    //place web3 method here
    makeKyc(
      form.name,
      form.email,
      form.phone,
      form.address1,
      form.city,
      form.country,
      form.identityCard
    );
    setIsLoading(false);
    // navigate("/");

    // setForm({...form, name: "", email: "", phone: "", address1: "", city: "", country: ""})
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          KYC
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Name *"
            placeholder="Enter your name"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName="Email *"
            placeholder="Enter you email"
            inputType="text"
            value={form.email}
            handleChange={(e) => handleFormFieldChange("email", e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="phone *"
            placeholder="Enter your phone number"
            inputType="text"
            value={form.phone}
            handleChange={(e) => handleFormFieldChange("phone", e)}
          />
          <FormField
            labelName="Address *"
            placeholder="Your address location"
            inputType="text"
            value={form.address1}
            handleChange={(e) => handleFormFieldChange("address1", e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="City *"
            placeholder="City"
            inputType="text"
            value={form.city}
            handleChange={(e) => handleFormFieldChange("city", e)}
          />
          <FormField
            labelName="Country *"
            placeholder="Country"
            inputType="text"
            value={form.country}
            handleChange={(e) => handleFormFieldChange("country", e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Identity Card/ Passport"
            placeholder="ID Image"
            inputType="file"
            value={form.identityCard}
            handleChange={(e) => handleFormFieldChange("identityCard", e)}
          />
        </div>

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="verify"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>

      {/* <button onClick={async () => {
        deployC();
      }}>
        Deploy contract
      </button> */}
    </div>
  );
};

export default Kyc;
