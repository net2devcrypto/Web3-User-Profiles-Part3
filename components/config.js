import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import userDbAbi from '../components/userdb.json';


export const client = ipfsHttpClient('http://IP-ADDRESS-OF-YOUR-IPFS-NODE:5001');
export const userdbaddress = '0xSMART-CONTRACT-ADDRESS-FROM-STEP-5';
const rpc = 'ADDRESS OF TESTNET DEPLOYED';
const updaterwallet = 'KEY-OBTAINED-FROM-STEP-6';
const provider = new ethers.providers.JsonRpcProvider(rpc);
const updater = new ethers.Wallet(updaterwallet, provider);
export const usercontract = new ethers.Contract(userdbaddress, userDbAbi, updater);

