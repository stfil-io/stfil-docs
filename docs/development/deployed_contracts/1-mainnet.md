---
sidebar_position: 1
---

# Mainnet

The STFIL protocol is an ecosystem of multiple networks, which is the main network deployment.

| Contracts                                                                          | Code                                                                                                                       | Address                                                                                                                 | ABI                                                         |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |-------------------------------------------------------------------------------------------------------------------------| ----------------------------------------------------------- |
| [StakingPool](../smart_contracts/staking_pool)                                     | [Github](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/stakingpool/StakingPool.sol)                    | [0xC8E4EF1148D11F8C557f677eE3C73901CD796Bf6](https://filfox.info/en/address/0xC8E4EF1148D11F8C557f677eE3C73901CD796Bf6) | [ABI](../abi/mainnet/StakingPool_ABI.json)                  |
| [STFILToken](../smart_contracts/stfil_tokens)                                      | [Github](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/tokenization/STFILToken.sol)                    | [0x3C3501E6c353DbaEDDFA90376975Ce7aCe4Ac7a8](https://filfox.info/en/address/0x3C3501E6c353DbaEDDFA90376975Ce7aCe4Ac7a8) | [ABI](../abi/mainnet/STFILToken_ABI.json)                   |
| [StableDebtToken](../smart_contracts/debt_tokens)                                  | [Github](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/tokenization/StableDebtToken.sol)               | [0xF440700552A59415d3D14Cf9382C48C86cda8F31](https://filfox.info/en/address/0xF440700552A59415d3D14Cf9382C48C86cda8F31) | [ABI](../abi/mainnet/StableDebtToken_ABI.json)              |
| [VariableDebtToken](../smart_contracts/debt_tokens)                                | [Github](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/tokenization/VariableDebtToken.sol)             | [0x0B24190702018C93E09A55F958D6485Ae31b62A1](https://filfox.info/en/address/0x0B24190702018C93E09A55F958D6485Ae31b62A1) | [ABI](../abi/mainnet/VariableDebtToken_ABI.json)            |
| [StakingPoolAddressesProvider](../smart_contracts/staking_pool_addresses_provider) | [Github](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/configuration/StakingPoolAddressesProvider.sol) | [0xc55e40977A782A0EA221812b9F01203effAC71a1](https://filfox.info/en/address/0xc55e40977A782A0EA221812b9F01203effAC71a1) | [ABI](../abi/mainnet/StakingPoolAddressesProvider_ABI.json) |
| [StakingPoolConfigurator](../smart_contracts/staking_pool_configurator)            | [Github](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/configuration/StakingPoolConfigurator.sol)      | [0x81cB4889fca11270eBb026F5c24fd65B1D5C22df](https://filfox.info/en/address/0x81cB4889fca11270eBb026F5c24fd65B1D5C22df) | [ABI](../abi/mainnet/StakingPoolConfigurator_ABI.json)      |
| [InterestRateStrategy](../smart_contracts/interest_rate_strategy)                  | [Github](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/configuration/InterestRateStrategy.sol)         | [0x0ab83f976372917F71CD4dCe2f6cC60080EcAa07](https://filfox.info/en/address/0x0ab83f976372917F71CD4dCe2f6cC60080EcAa07) | [ABI](../abi/mainnet/InterestRateStrategy_ABI.json)         |
| RISK_RESERVE                                                                       |                                                                                                                            | [0xff00000000000000000000000000000000000063](https://filfox.info/en/address/0xff00000000000000000000000000000000000063) |                                                             |
| TREASURY                                                                           |                                                                                                                            | [0x8ca2fb7E86b440163666DC32186E1Dc0b74a505b](https://filfox.info/en/address/0x8ca2fb7E86b440163666DC32186E1Dc0b74a505b) |                                                             |
| POOL_ADMIN                                                                         |                                                                                                                            | [f02117145](https://filfox.info/en/address/f02117145)                                                                   |                                                             |
| CONTRACTS_ADMIN                                                                    |                                                                                                                            | [0x0d97E26489e1c1d0f799552F38C65F4a86288302](https://filfox.info/en/address/0x0d97E26489e1c1d0f799552F38C65F4a86288302) |                                                             |
| EMERGENCY_ADMIN                                                                    |                                                                                                                            | [0xb1018C16E91B5e546e647b0B252Bf1569e50A617](https://filfox.info/en/address/0xb1018C16E91B5e546e647b0B252Bf1569e50A617) |                                                             |

## Initial Parameter Recommendation

The deployment of the staking pool needs to initialize some parameters, which are designed according to the economic model and liquidity, and these parameters have been verified. When changes to these parameters are due they will be announced and applied in the community.

| Parameter                                   | Value                       |
|---------------------------------------------|-----------------------------|
| fee(treasury factor)                        | 1000                        |
| maxBorrowRate                               | 462000000000000000000000000 |
| optimalBorrowRate                           | 192000000000000000000000000 |
| optimalUtilizationRate                      | 800000000000000000000000000 |
| liquidationFactor(liquidation award factor) | 100                         |