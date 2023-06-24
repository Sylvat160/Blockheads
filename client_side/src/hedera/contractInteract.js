import json from './BusinessLogic.json'
import { ethers } from 'ethers'

const { abi, bytecode } = json
const contractAdress = '0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

const contractKyc = async (
  name,
  email,
  phone,
  address,
  city,
  country,
  walletData,
) => {
  console.log(`\n=======================================`)
  console.log(`- Executing the smart contract...🟠`)
  // .verifyKYC(name, email, phone, address, city, country)
  const provider = walletData[1]
  const signer = provider.getSigner()

  console.log('Provider 321332');
  console.log(provider);
    console.log('Signer 321332');
    console.log(signer);

  try {
    const gasLimit = 1000000;
    const Contract = new ethers.Contract(contractAdress, abi, signer)
    console.log(
      name,
      email,
      phone,
      address,
      city,
      country,
    );
    const tx = await Contract.verifyKYC(
      name,
      email,
      phone,
      address,
      city,
      country
    )

    console.log(`- Transaction hash: ${tx.hash} ✅`)
    console.log(`- Waiting for the transaction to be mined...🟠`)
    await tx.wait()
    console.log(`- Transaction confirmed ✅`)
    console.log(`- Transaction receipt:`)
    console.log(tx)
  } catch (error) {
    console.log(`- ${error.message.toString()}`)
  }
}

export { contractKyc }
