import React, { useState, useEffect} from 'react'
import { useStateContext } from '../context'
import { DisplayProperties } from '../components';

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const { address, contract, getFakeProperties } = useStateContext();

  const fetchAllProperties = async () => {
    setIsLoading(true);
    // const data = await getCampaigns();
    const data = await getFakeProperties();
    setProperties(data);
    setIsLoading(false);
  }

  useEffect(() => {
    // if (contract) fetchAllProperties();
    fetchAllProperties();
  }, [address, contract]);

  return (
    <DisplayProperties
      title="All Properties"
      isLoading={isLoading}
      properties={properties}
    />
  )
}

export default Home