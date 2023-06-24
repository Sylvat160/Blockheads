import { ethers } from "ethers";
import React, { useContext, createContext, useState, useEffect } from "react";
import json from "../hedera/BusinessLogic.json"
import { contractKyc, deploying } from "../hedera";

//TODO:: DELETE THIS AFTER PRESENTATION
import fakeData from "../fake-data/data";

const { abi } = json;
const contractAdress = "0x0000000000000000000000000000000000e29081";
// import {
//   useAddress,
//   useContract,
//   useMetamask,
//   useContractWrite,
// } from "@thirdweb-dev/react";
// import { ethers } from "ethers";
// import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // const { contract } = useContract(
  //   "0x30D7852Dcd436E385fFdA0e21bF10f63f7e5aEa8"
  // );
  // Request access to the user's MetaMask account
  
  const createCampaign = null;
  const [address, setAddress] = useState(null);
  const [globalWData, setGlobalWData] = useState([]);
  // const { mutateAsync: createCampaign } = useContractWrite(
  //   contract,
  //   "createCampaign"
  // );

  // const connect = useMetamask();

  useEffect(() => {
    console.log("globalWData____________________");
    console.log(globalWData);
  }, [globalWData])

  const makeKyc = async (name, email, phone, address, city, country) => {
     await contractKyc(
        name,
        email,
        phone,
        address,
        city,
        country,
        globalWData
      );

  };

  const connect = null;

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign({
        args: [
          address, // owner
          form.title, // title
          form.description, // description
          form.target,
          new Date(form.deadline).getTime(), // deadline,
          form.image,
        ],
      });

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract.call("getCampaigns");

    const parsedCampaings = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      pId: i,
    }));
    return parsedCampaings;
  };

  //TODO:: DELETE METHOD AFTER PRESENTATION
  const getFakeProperties = async () => {
    const parsedCampaings = fakeData.fakeAssets.map((property, i) => ({
      owner: property.propertyOwner,
      title: property.propertyName,
      description: property.propertyDescription,
      target: property.propertyValue,
      deadline: property.propertyBidDeadline,
      amountCollected: property.propertyAmountCollected,
      image: property.propertyImage,
      pId: i+1
    }));

    console.log(parsedCampaings);

    await new Promise((resolve) => setTimeout(resolve, 10));
    return parsedCampaings;
  }

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaigns;
  };

  const donate = async (pId, amount) => {
    const data = await contract.call("donateToCampaign", [pId], {
      value: ethers.utils.parseEther(amount),
    });

    return data;
  };

  const getDonations = async (pId) => {
    const donations = await contract.call("getDonators", [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  const deployC = async () => {

    await deploying(globalWData);
  }

  return (
    <StateContext.Provider
      value={{
        address,
        connect,
        setAddress,
        makeKyc,
        setGlobalWData,
        deployC,
        getFakeProperties //TODO::DELETE THIS AFTER PRESENTATION
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
 