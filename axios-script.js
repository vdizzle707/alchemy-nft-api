// alchemy-nft-api/axios-script.js
import axios from 'axios';
 
// Replace with your Alchemy API key:
const apiKey = "alch_13g7S1YDCWSlr7XWAVG5o";
const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTsForOwner/`;
// Replace with the wallet address you want to query for NFTs:
const ownerAddr = "0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c";
const pageSize = 2;
 
// Construct the axios request:
var config = {
  method: 'get',
  url: `${baseURL}?owner=${ownerAddr}&pageSize=${pageSize}`
};
 
// Make the request and print the formatted response:
axios(config)
.then(response => console.log(JSON.stringify(response.data, null, 2)))
.catch(error => console.log(error));
