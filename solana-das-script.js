// solana-das-script.js - Metaplex Umi & DAS API integration
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { dasApi } from '@metaplex-foundation/digital-asset-standard-api';
import { publicKey } from '@metaplex-foundation/umi';

async function runSolanaDas() {
  try {
    console.log("Initializing Metaplex Umi with Solana devnet & DAS API...");
    const rpcUrl = "https://api.devnet.solana.com";
    const umi = createUmi(rpcUrl).use(dasApi());

    // Example owner public key on Solana
    const targetKey = process.env.SOLANA_TARGET_PUBKEY;
if (!targetKey || targetKey === '11111111111111111111111111111111') {
  throw new Error('[FATAL] Live SOLANA_TARGET_PUBKEY required. Dummy pubkeys rejected under zero-trust doctrine.');
}
const ownerPubkey = publicKey(targetKey);
    console.log("Querying assets by owner for:", ownerPubkey);

    const assets = await umi.rpc.getAssetsByOwner({
      owner: ownerPubkey,
      limit: 3
    });

    console.log("Assets found:", assets.total);
    console.log("Asset items:", JSON.stringify(assets.items, null, 2));

  } catch (error) {
    console.error("Solana DAS query failed:", error.message);
  }
}

runSolanaDas();
