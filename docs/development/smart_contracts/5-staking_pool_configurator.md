---
sidebar_position: 5
---

# StakingPoolConfigurator

Implements the configuration methods for the STFIL protocol

The source code can be found [on Github here](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/configuration/StakingPoolConfigurator.sol).

## Methods

### **Only Pool Admin**

* enableStableRate
* disableStableRate
* setFee
* setLiquidationFactor
* disabledBorrowing
* enabledBorrowing
* disabledBorrowing(uint64 actorId)
* enabledBorrowing(uint64 actorId)
* setNodeLeverage

### **Only Emergency Admin**

* setPoolPause

## ABI

<details>
<summary>StakingPoolConfigurator ABI</summary>

```
[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        }
      ],
      "name": "BorrowingDisabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        }
      ],
      "name": "BorrowingEnabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "DefaultBorrowingDisabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "DefaultBorrowingEnabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maxLeverage",
          "type": "uint256"
        }
      ],
      "name": "MaxLeverageChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "PoolFeeChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "StableRateModeDisabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "StableRateModeEnabled",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "disableStableRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        }
      ],
      "name": "disabledBorrowing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "disabledBorrowing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "enableStableRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "enabledBorrowing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        }
      ],
      "name": "enabledBorrowing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IStakingPoolAddressesProvider",
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "setFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "liquidationFactor",
          "type": "uint256"
        }
      ],
      "name": "setLiquidationFactor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        },
        {
          "internalType": "uint256",
          "name": "maxLeverage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidationThreshold",
          "type": "uint256"
        }
      ],
      "name": "setNodeLeverage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "val",
          "type": "bool"
        }
      ],
      "name": "setPoolPause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]
```
</details>

