// token-api-script.js - Alchemy Token Allowance Request
const apiKey = "alch_13g7S1YDCWSlr7XWAVG5o";
const url = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;

async function fetchTokenAllowance() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "alchemy_getTokenAllowance",
        params: [
          {
            contract: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
            owner: "0xf1a726210550c306a9964b251cbcd3fa5ecb275d",
            spender: "0xdef1c0ded9bec7f1a1670819833240f027b25eff"
          }
        ]
      })
    });
    const result = await response.json();
    console.log("Token Allowance Result:", JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

fetchTokenAllowance();
