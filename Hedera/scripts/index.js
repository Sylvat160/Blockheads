const {
  AccountId,
  PrivateKey,
  Client,
  FileCreateTransaction,
  ContractCreateTransaction,
  ContractFunctionParameters,
  ContractExecuteTransaction,
  ContractCallQuery,
  Hbar,
  ContractCreateFlow,
} = require('@hashgraph/sdk')
const fs = require('fs')

const operatorId = AccountId.fromString('0.0.14819492')
const operatorKey = PrivateKey.fromString(
  '3030020100300706052b8104000a042204209f090834a31d63376b9ee08942a5cb23e41dc8f42786f418cf0902017b89a771',
)
const client = Client.forTestnet().setOperator(operatorId, operatorKey)

async function main() {
  const contractBytecode = fs.readFileSync(
    'contracts_BusinessLogic_sol_BusinessLogic.bin',
  )

  const contractInstantiateTx = new ContractCreateFlow()
    .setBytecode(contractBytecode)
    .setGas(100000)

  const contractInstantiateSubmit = await contractInstantiateTx.execute(client)
  const contractInstantiateRx = await contractInstantiateSubmit.getReceipt(
    client,
  )
  const contractId = contractInstantiateRx.contractId
  const contractAddress = contractId.toSolidityAddress()
  console.log(`- The smart contract ID is: ${contractId} \n`)
  console.log(
    `- The smart contract ID in Solidity format is: ${contractAddress} \n`,
  )

  // Query the contract to check changes in state variable
  //   const contractQueryTx = new ContractCallQuery()
  //     .setContractId(contractId)
  //     .setGas(100000)
  //     .setFunction(
  //       'getMobileNumber',
  //       new ContractFunctionParameters().addString('Alice'),
  //     )
  //   const contractQuerySubmit = await contractQueryTx.execute(client)
  //   const contractQueryResult = contractQuerySubmit.getUint256(0)
  //   console.log(
  //     `- Here's the phone number that you asked for: ${contractQueryResult} \n`,
  //   )

  //   // Call contract function to update the state variable
  //   const contractExecuteTx = new ContractExecuteTransaction()
  //     .setContractId(contractId)
  //     .setGas(100000)
  //     .setFunction(
  //       'setMobileNumber',
  //       new ContractFunctionParameters().addString('Bob').addUint256(222222),
  //     )
  //   const contractExecuteSubmit = await contractExecuteTx.execute(client)
  //   const contractExecuteRx = await contractExecuteSubmit.getReceipt(client)
  //   console.log(`- Contract function call status: ${contractExecuteRx.status} \n`)

  // Query the contract to check changes in state variable
  //   const contractQueryTx1 = new ContractCallQuery()
  //     .setContractId(contractId)
  //     .setGas(100000)
  //     .setFunction(
  //       'getMobileNumber',
  //       new ContractFunctionParameters().addString('Bob'),
  //     )
  //   const contractQuerySubmit1 = await contractQueryTx1.execute(client)
  //   const contractQueryResult1 = contractQuerySubmit1.getUint256(0)
  //   console.log(
  //     `- Here's the phone number that you asked for: ${contractQueryResult1} \n`,
  //   )
}
//0x0000000000000000000000000000000000e26a51
