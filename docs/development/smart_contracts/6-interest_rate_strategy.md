---
sidebar_position: 6
---

# InterestRateStrategy

Implements the calculation of the interest rates depending on the staking pool state

The source code can be found [on Github here](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/configuration/InterestRateStrategy.sol).

## Methods

### **calculateInterestRates()**

**`calculateInterestRates(uint256 availableLiquidity, uint256 liquidityAdded, uint256 liquidityTaken, uint256 totalStableDebt, uint256 totalVariableDebt, uint256 averageStableBorrowRate, uint256 fee)`**

Calculates the interest rates depending on the reserve's state and configurations

#### Call Params

| Parameter Name            | Type    | Description                                                                 |
| ------------------------- | ------- | --------------------------------------------------------------------------- |
| `availableLiquidity`      | uint256 | The available liquidity from staking pool balance                           |
| `liquidityAdded`          | uint256 | The liquidity added during the operation                                    |
| `liquidityTaken`          | uint256 | The liquidity taken during the operation                                    |
| `totalStableDebt`         | uint256 | The total borrowed from the reserve a stable rate                           |
| `totalVariableDebt`       | uint256 | The total borrowed from the reserve a variable rate                         |
| `averageStableBorrowRate` | uint256 | The weighted average of all the stable rate loans                           |
| `fee`                     | uint256 | The reserve portion of the interest that goes to the treasury of the market |

#### Return values

| Type    | Description               |
| ------- | ------------------------- |
| uint256 | The new liquidity rate    |
| uint256 | The new new stable rate   |
| uint256 | The new variable rate     |

**`calculateInterestRatescalculateInterestRates(uint256 availableLiquidity, uint256 totalStableDebt, uint256 totalVariableDebt, uint256 averageStableBorrowRate, uint256 fee) `**

Calculates the interest rates depending on the reserve's state and configurations.

#### Call Params

| Parameter Name            | Type    | Description                                                                 |
| ------------------------- | ------- | --------------------------------------------------------------------------- |
| `availableLiquidity`      | uint256 | The available liquidity from staking pool balance                           |
| `totalStableDebt`         | uint256 | The total borrowed from the reserve a stable rate                           |
| `totalVariableDebt`       | uint256 | The total borrowed from the reserve a variable rate                         |
| `averageStableBorrowRate` | uint256 | The weighted average of all the stable rate loans                           |
| `fee`                     | uint256 | The reserve portion of the interest that goes to the treasury of the market |

#### Return values

| Type    | Description               |
| ------- | ------------------------- |
| uint256 | The new liquidity rate    |
| uint256 | The new new stable rate   |
| uint256 | The new variable rate     |

### **Only Pool Admin**

* setStrategyParams

## ABI

<details>
<summary>InterestRateStrategy ABI</summary>

```
[
    {
      "inputs": [
        {
          "internalType": "contract IStakingPoolAddressesProvider",
          "name": "provider",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "maxBorrowRate_",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "optimalBorrowRate_",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "optimalUtilizationRate_",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maxBorrowRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "optimalBorrowRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "optimalUtilizationRate",
          "type": "uint256"
        }
      ],
      "name": "StrategyParamsChanged",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "availableLiquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalStableDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalVariableDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "averageStableBorrowRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "calculateInterestRates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "availableLiquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidityAdded",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidityTaken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalStableDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalVariableDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "averageStableBorrowRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "calculateInterestRates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxBorrowRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "optimalBorrowRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "optimalUtilizationRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "maxBorrowRate_",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "optimalBorrowRate_",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "optimalUtilizationRate_",
          "type": "uint256"
        }
      ],
      "name": "setStrategyParams",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]
```
</details>

