// metaplex-api-script.js - Test Metaplex public REST API
import axios from 'axios';

const baseUrl = 'https://api.metaplex.com/v1';

async function testMetaplexApi() {
  try {
    console.log("Fetching spotlight launches from Metaplex API...");
    const res = await axios.get(`${baseUrl}/launches`, {
      params: { spotlight: true }
    });
    console.log("Metaplex API Response:", JSON.stringify(res.data, null, 2));
  } catch (error) {
    console.error("Metaplex API request failed:", error.message);
  }
}

testMetaplexApi();
