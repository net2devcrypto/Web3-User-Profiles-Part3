import { client } from "./config";
import Web3Modal from 'web3modal';
import { ethers } from "ethers";


export const pinJSONToIPFS = async(data) => {
    const added = await client.add(data)
    const path = added.path;
    return path;
}

export async function ethConnect() {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const addressraw = signer.getAddress();
    const addressstr = (await addressraw).valueOf();
    return addressstr;
}
