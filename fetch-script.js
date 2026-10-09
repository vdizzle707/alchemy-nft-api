// fetch-script.js - Alchemy Token Balances Request
const apiKey = "alch_13g7S1YDCWSlr7XWAVG5o";
const url = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;

async function fetchTokenBalances() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "alchemy_getTokenBalances",
        params: [
          "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
          [
            "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
          ]
        ]
      })
    });
    const result = await response.json();
    console.log("Token Balances Result:", JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

fetchTokenBalances();
