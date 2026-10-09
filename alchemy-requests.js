// Advanced Alchemy API Request Runner
const apiKey = "alch_13g7S1YDCWSlr7XWAVG5o";

async function runAlchemyRequests() {
  try {
    console.log("=== 1. Executing alchemy_getTokenAllowance ===");
    const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
    const rpcResponse = await fetch(rpcUrl, {
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
    const rpcResult = await rpcResponse.json();
    console.log("RPC Response:", JSON.stringify(rpcResult, null, 2));

    console.log("\n=== 2. Executing alchemy_getTokenBalances ===");
    const balancesResponse = await fetch(rpcUrl, {
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
    const balancesResult = await balancesResponse.json();
    console.log("Token Balances Response:", JSON.stringify(balancesResult, null, 2));

    console.log("\n=== 3. Executing Transfers by Address API ===");
    const dataApiUrl = `https://api.g.alchemy.com/data/v1/${apiKey}/transfers/by-address`;
    const dataApiResponse = await fetch(dataApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
        direction: "both",
        networks: [
          "eth-mainnet",
          "base-mainnet",
          "matic-mainnet"
        ],
        fromTimestamp: "2026-08-01T00:00:00Z",
        toTimestamp: "2026-08-06T00:00:00Z",
        category: [
          "external",
          "erc20",
          "erc721",
          "erc1155"
        ],
        order: "desc",
        maxCount: 5
      })
    });
    const dataApiResult = await dataApiResponse.json();
    console.log("Data API Response:", JSON.stringify(dataApiResult, null, 2));

  } catch (error) {
    console.error("Request failed:", error.message);
  }
}

runAlchemyRequests();
