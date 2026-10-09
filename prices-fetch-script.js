// prices-fetch-script.js - Alchemy Token Metadata / Price Check
const apiKey = "alch_13g7S1YDCWSlr7XWAVG5o";
const url = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;

async function fetchTokenMetadata() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "alchemy_getTokenMetadata",
        params: [
          "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" // USDC contract
        ]
      })
    });
    const result = await response.json();
    console.log("Token Metadata Result:", JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

fetchTokenMetadata();
