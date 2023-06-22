import json from './BusinessLogic.json'
import { ethers } from 'ethers'

const { abi, bytecode } = json
const contractAdress = '0x0000000000000000000000000000000000e29081'

const deploying = async (walletData) => {

    console.log(`\n=======================================`)
    console.log(`- Deploying the smart contract...🟠`)
    const provider = walletData[1]
    const signer = provider.getSigner()
    
    try {
        const gasLimit = 8000000;
        const factory = new ethers.ContractFactory(abi, bytecode, signer)
        const contract = await factory.deploy({ gasLimit })
        console.log(`- Contract address: ${contract.address} ✅`)
        console.log(`- Waiting for the contract to be deployed...🟠`)
        await contract.deployed()
        console.log(`- Contract deployed ✅`)
        console.log(`- Contract:`)
        console.log(contract)
    } catch (error) {
        console.log(`- ${error.message.toString()}`)
    }
}

export { deploying }