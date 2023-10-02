import { getDefaultProvider, Wallet } from "ethers"; // ethers v5
import { Provider, TransactionResponse } from "@ethersproject/providers"; // ethers v5
import { ERC721Client } from "@imtbl/zkevm-contracts";

const CONTRACT_ADDRESS = "0xFcDAc649dc7424E504dD8a24736D39Ff89DcC7fa";
const PRIVATE_KEY = "ffc8f3b4e4de2e98b7bd5429dc45341f490ad82fa36286f70965d59e5560dd99";
const provider = getDefaultProvider("https://rpc.testnet.immutable.com");

const grantMinterRole = async (
 provider: Provider
): Promise<TransactionResponse> => {
 // Bound contract instance
 const contract = new ERC721Client(CONTRACT_ADDRESS);
 // The wallet of the intended signer of the mint request
 const wallet = new Wallet(PRIVATE_KEY, provider);

 // Give the wallet minter role access
 const populatedTransaction = await contract.populateGrantMinterRole(
  wallet.address
 );
 const result = await wallet.sendTransaction(populatedTransaction);
 console.log("Minter Role Granted");
 return result;
};

grantMinterRole(provider);