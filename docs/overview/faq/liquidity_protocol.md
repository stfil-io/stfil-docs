---
sidebar_position: 1
---

# Liquidity protocol

### Protocol Overview
_**STFIL protocol**_ is a liquid staking protocol built on top of Filecoin that aims to be community-owned, decentralized, trustless, and compatible with staking in Filecoin. STFIL allows users to obtain loan income without locking assets. Storage Provider can borrow more FIL for pledge to obtain block rewards under the premise of promising to operate and maintain nodes. It is profitable for both parties.

_**STFIL**_ will be directly managed by STFIL DAO, and all upgrades and new functions will not be controlled by any single team. STFIL strives to play the core spirit of decentralized DiFi, and has been exploring on the road of decentralization and trustlessness.

### Protocol User

The main user group of the _**STFIL protocol**_ :

⚒︎ Token holders who want to obtain pledge income without sacrificing liquidity can obtain liquidity by holding stFil;

⚒︎︎ Teams with high-quality hardware resources and operation and maintenance capabilities provides services to obtain a higher return on investment.

### Tokenization of staked assets.

_**STFIL**_ protocol will issue stFIL tokens, which are derivative tokens that pledge FIL;

The STFIL protocol allows holders to deposit their FIL assets into a smart contract for liquidity staking and mint 1:1 staked derivative tokens called stFIL. These tokens are based on EIP-2612 (an extension of the ERC-20 standard) and represent a claim on the staked FIL. Furthermore, stFIL is not locked to the STFIL protocol and accumulates staking rewards wherever it is held. This means that whether you obtain staked derivative tokens directly through staking at https://stake.stfil.io, purchase them from an exchange, or receive them as a gift from a friend, they will automatically accrue FIL staking rewards based on time and liquidity.

As long as there is sufficient liquidity available to cover the exchange, you can trade them back to the protocol for profit. Even when there is a market risk due to fluctuations in the supply and demand of stFIL on the secondary market, holders can still have confidence in the token when there is an oversupply of stFIL.

stFIL can be used and traded like any other ERC-20 token, allowing users to do anything they wish with the token, including holding, selling, trading, and lending. This provides users with higher capital efficiency and utility, as it allows holders to earn staking rewards while also being able to use FIL on DeFi platforms.

The STFIL protocol provides loans to Storage Provider nodes for their mining stake, using the FIL deposited into the smart contract of the liquid staking pool. Holders receive mining rewards from the Storage Providers as a result. STFIL aggregates penalties and losses occurring throughout the network, minimizing the impact on any individual user's stake, with the guaranty amount from Storage Providers taking priority, followed by STFIL commission, and finally the pool.

Currently, the STFIL protocol has a minimum staking requirement of 1 FIL tokens, with no upper limit.


###  SP stake node

STFIL protocol encourages storage providers with more professional hardware, facilities, operations personnel, and stable power equipment to actively participate in the construction of the network and improve its overall service quality. The goal is to build a robust, stable, and user-friendly distributed storage network. The protocol allows anyone to join the decentralized liquidity staking network of storage providers and earn a higher investment return than outside the protocol.

The protocol requires storage providers to have already operated a storage provider node and used the assets of the current node as collateral to qualify and obtain a loan limit from the protocol. When a storage provider submits a node entry application, it will be reviewed by STFIL DAO, which will strictly scrutinize the qualifications of the node from multiple aspects, such as:

➱ The operational capacity of storage providers, especially for large-scale storage providers.

➱ Performance history of SP.

➱ Geographic and jurisdictional distribution.

➱ Management mode of keys.

➱ ...

Storage providers can choose the Owner or Beneficiary of the pledge node to obtain loans as collateral, and obtain different maximum LTV ratios for loans, which represent the maximum borrowing capacity of specific collateral. For example, if the LTV of the collateral is 120%, the node can lend up to 1.2 FIL of its local currency for every 1 FIL of assets. The Owner mode is set with a larger LTV, but when a major accident occurs to the node and cannot be repaired, STFIL DAO will terminate some sectors to rescue the residual value of the node. The coefficient  currently set by the protocol is：

 <center>LTV<sub>Beneficiary</sub> = 100%; &nbsp; &nbsp; &nbsp; LTV<sub>Owner</sub> = 200% </center>   

