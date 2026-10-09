// nft-api-script.js (Axios version)
import axios from 'axios';

const apiKey = "alch_13g7S1YDCWSlr7XWAVG5o";
const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}`;

async function getNFTDataWithAxios() {
  try {
    const ownerAddr = "vitalik.eth";
    console.log("Fetching NFTs for owner using Axios:", ownerAddr);

    const response = await axios.get(`${baseURL}/getNFTsForOwner`, {
      params: {
        owner: ownerAddr,
        pageSize: 3
      }
    });

    console.log("Total NFTs found:", response.data.totalCount);
    if (response.data.ownedNfts) {
      for (const nft of response.data.ownedNfts) {
        console.log(`- Contract: ${nft.contract.address}, Token ID: ${nft.tokenId}`);
      }
    }
  } catch (error) {
    console.error("Axios NFT request failed:", error.message);
  }
}

getNFTDataWithAxios();
