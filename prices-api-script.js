// prices-api-script.js - Alchemy Prices API Integration
const apiKey = "alch_13g7S1YDCWSlr7XWAVG5o";
const baseUrl = `https://api.g.alchemy.com/prices/v1/${apiKey}`;

async function runPricesApiRequests() {
  try {
    console.log("=== 1. Fetching Historical Prices (ETH) ====");
    const histRes = await fetch(`${baseUrl}/tokens/historical`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "symbol": "ETH",
        "startTime": "2024-01-01T00:00:00Z",
        "endTime": "2024-01-05T23:59:59Z", // shortened range for clean output
        "interval": "1d",
        "withMarketData": true
      })
    });
    const histData = await histRes.json();
    console.log("Historical Prices:", JSON.stringify(histData, null, 2));

    console.log("\n=== 2. Fetching Prices by Address (USDC) ====");
    const addrRes = await fetch(`${baseUrl}/tokens/by-address`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "addresses": [
          {
            "network": "eth-mainnet",
            "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
          }
        ]
      })
    });
    const addrData = await addrRes.json();
    console.log("Prices by Address:", JSON.stringify(addrData, null, 2));

    console.log("\n=== 3. Fetching Prices by Symbol (ETH) ====");
    const symbolRes = await fetch(`${baseUrl}/tokens/by-symbol?symbols=ETH`, {
      method: "GET",
      headers: { "Accept": "application/json" }
    });
    const symbolData = await symbolRes.json();
    console.log("Prices by Symbol:", JSON.stringify(symbolData, null, 2));

  } catch (error) {
    console.error("Prices API request failed:", error.message);
  }
}

runPricesApiRequests();
