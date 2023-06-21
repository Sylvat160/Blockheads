import React, { useState, useEffect } from "react";

import { DisplayProperties } from "../components";
import { useStateContext } from "../context";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchProperties = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchProperties();
  }, [address, contract]);

  return (
    <DisplayProperties
      title="Your Properties"
      isLoading={isLoading}
      properties={campaigns}
    />
  );
};

export default Profile;
