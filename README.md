# NFT Vanilla Contracts

The repository consists of BEP 721 & BEP 1155 Protocol Minting Contracts.

# Overview
We considered use cases of NFTs being owned and transacted by individuals as well as consignment to third party brokers/wallets/auctioneers (“operators”). NFTs can represent ownership over digital or physical assets. We considered a diverse universe of assets, and we know you will dream up many more:

- Physical property — houses, unique artwork
- Virtual collectables — unique pictures of kittens, collectable cards
- “Negative value” assets — loans, burdens and other responsibilities
- In general, all houses are distinct and no two kittens are alike. NFTs are distinguishable and you must track the ownership of each one separately.

The contracts here are based on EVM industry standard BEP721 and BEP1155 protocol to create the Non-fungible tokens for a given digital asset. 

# Related Components
- nft-minter-marketplace - the main vanilla marketplace of this NFT contract project.
- nft-minter - the main example frontend of the minting engine. Deployed version of this can be seen [here](https://nft.proofsys.io)
- nft-minter-service - REST Service endpoint for consumers who wants to upload directly from their application via REST API.

## Run The Code

The repository requires Truffle v5.0.3 to run

For Deploying the contracts

```sh
truffle migrate --network testnet
```

For Compiling 

```sh
truffle compile
```

## Plugins

We've used the following plugins

| Plugin
| ------ 
| Truffle
| Gnache
| Solhint

## Development

- Visit the below contract on BSC Testnet https://testnet.bscscan.com/address/0x1c80c296627ae5CF01e4eD2dF69557c51AAE78b2#contracts 
- Visit the BEP 1155 Protocol - Proof Token Contract at https://testnet.bscscan.com/address/0x713da13df3ea464610e2944dcee3cf1f5b86d923

# Integration
Building your own NFT Minting Engine, Marketplace or Offering it as a Service? Reach out at info@proofsys.io for implementation and integration inquiries.
