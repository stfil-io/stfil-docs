---
sidebar_position: 2
---

# StakingPool

The StakingPool contract is the main contract of the protocol. It exposes all the user-oriented actions that can be invoked using either Solidity or web3 libraries.

The source code can be found [on Github here](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/stakingpool/StakingPool.sol).

## Methods

### **stake()**

**`  function stake(address onBehalfOf)`**

Stakes the msg.value amount of FIL into the protocol, minting the same amount of corresponding stFILTokens, and transferring them to the onBehalfOf address.

#### Call Params

| Parameter Name | Type    | Description                                                                                                                           |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `onBehalfOf`   | address | <p>address whom will receive the stFILTokens. <br/>Use <code>msg.sender</code> when the stFILTokens should be sent to the caller.</p> |


### **unstake()**

**`function unstake(uint256 amount, address to)`**

Unstakes `amount` of the underlying `asset`, i.e. redeems the underlying token and burns the stFILTokens.

#### Call Params

| Parameter Name | Type    | Description                                                                                                                           |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`       | uint256 | <p>amount deposited, expressed in attoFIL units. <br/>Use <code>type(uint).max</code> to withdraw the entire balance.</p>             |
| `to`           | address | address that will receive the `asset`                                                                                                 |

### **liquidation()**

**`function liquidation(uint64 actorId, address onBehalfOf)`**

Liquidation conditions: _**debtRadio > liquidationThreshold**_

When the sp's debt radio is above liquidation threshold, the liquidator can perform liquidation on the sp's node, while **receive a certain proportion of rewards from the liquidated part of the liquidated party** in return (also known as a liquidation 'award'). When the liquidation is completed successfully, the debt of the position is decreased, bringing the debt radio below liquidation threshold.

#### Call Params

| Parameter Name | Type    | Description                                                                                                                       |
| -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `actorId`      | uint64  | address that will liquidation                                                                                                     |
| `onBehalfOf`   | address | <p>address of user who will incur the debt.</p><p>Use <code>msg.sender</code> when not calling on behalf of a different user.</p> |

## Node Methods

### **borrow()**

**`function borrow(uint64 actorId, uint256 amount, uint256 rateMode)`**

Borrows `amount` with `rateMode`, sending the `amount` to `actorId`, with the debt being incurred by `actorId`, `msg.sender` is node operator.

:::note
Only the operator of the node is callable. If the node has not been set, you can call the `approveOperator` method to set it
:::

#### Call Params

| Parameter Name     | Type    | Description                                                                                                                       |
| ------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `actorId`          | uint64  | <p>address of storage provider who will incur the debt.</p>                                                                       |
| `amount`           | uint256 | amount to be borrowed, expressed in attoFIL units                                                                                 |
| `rateMode`         | uint256 | <p>the type of borrow debt.</p><p>Stable: 1, Variable: 2</p>                                                                      |


### **repay()**

**`function repay(uint64 actorId, uint256 amount, uint256 rateMode)`**

Repays `actorId`'s debt `amount` of `asset` which has a `rateMode`.

:::note
Only the operator of the node is callable. If the node has not been set, you can call the `approveOperator` method to set it
:::

#### Call Params

| Parameter Name | Type    | Description                                                                                                                                                                               |
| -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actorId`      | uint64  | <p>address of storage provider who will incur the debt.</p>                                                                                                                               |
| `amount`       | uint256 | <p>amount to be borrowed, expressed in attoFIL units.</p><p>In case of repayments, it's recommended to send an <code>_amount</code> slightly higher than the current borrowed amount.</p> |
| `rateMode`     | uint256 | <p>the type of borrow debt.</p><p>Stable: 1, Variable: 2</p>                                                                                                                              |


### **withdraw()**

**`function withdraw(uint64 actorId, uint256 amount)`**

Withdraws `amount` of the underlying `asset`, i.e. withdraw the available balance of `actorId`

:::note
Only the operator of the node is callable. If the node has not been set, you can call the `approveOperator` method to set it
:::

#### Call Params

| Parameter Name | Type    | Description                                                                                                                       |
| -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `actorId`      | uint64  | address that will withdraw the `asset`                                                                                            |
| `amount`       | uint256 | <p>available amount of `actorId`, expressed in attoFIL units. Use <code>type(uint).max</code> to withdraw the entire balance.</p> |

### **delegateBeneficiary()**

**`function delegateBeneficiary(uint64 actorId)`**

To delegate the role of beneficiary of the node to the pool, the initiator must be one of the node owners
   * Set the current contract address as the new beneficiary. If there are other beneficiaries, they must agree
   * Before executing this method to change the beneficiary. The owner becomes the operator of the node.

#### Call Params

| Parameter Name | Type    | Description                             |
| -------------- | ------- | --------------------------------------- |
| `actorId`      | uint64  | address that will delegate beneficiary  |

### **undelegateBeneficiary()**

**`function undelegateBeneficiary(uint64 actorId)`**

Undelegate the beneficiary role previously delegated to the pool, provided that the node has no debt.
   * The initiator must be one of the node owners and then execute this method to change the beneficiary.
   * Please note that if the newly set beneficiary is still the current contract address, the execution will be rejected.

#### Call Params

| Parameter Name | Type    | Description                              |
| -------------- | ------- | ---------------------------------------- |
| `actorId`      | uint64  | address that will undelegate beneficiary |

### **delegateOwner()**

**`function delegateOwner(uint64 actorId)`**

To delegate the owner role of the node to the pool, the initiator must be one of the node owners
   * Set the current contract address as the new owner. If there are other beneficiaries, the operation will be rejected.
   * The owner becomes the operator of the node.

#### Call Params

| Parameter Name | Type    | Description                       |
| -------------- | ------- | --------------------------------- |
| `actorId`      | uint64  | address that will delegate owner  |

### **undelegateOwner()**

**`function undelegateOwner(uint64 actorId)`**

Undelegate the ownership of the node previously delegated to the pool, provided that the node has no debt.
   * The current contract will first initiate a change of beneficiary to the node's operator,
   * and the node owners need to initiate another "changeOwner" message to accept the ownership role.

#### Call Params

| Parameter Name | Type    | Description                        |
| -------------- | ------- | ---------------------------------- |
| `actorId`      | uint64  | address that will undelegate owner |

### **approveOperator()**

**`function approveOperator(uint64 actorId, address operator)`**

Approve an operator to a storage provider node.
   * In order to store the security of the provider,
   * the pledge pool protocol separates the authority of the operator from the owner.
   * Only the operator has the authority to loan, repay, and withdraw cash from the pool,
   * and the right to obtain income is still the owner.

:::note
Only nodes that have successfully delegated can call
:::

#### Call Params

| Parameter Name | Type    | Description                        |
| -------------- | ------- | ---------------------------------- |
| `actorId`      | uint64  | address of storage provider        |
| `operator`     | uint64  | address that will set operator     |

## View Methods

### **getReserveData()**

Returns the state and configuration of the reserve

#### Return values

| Parameter Name                | Type    | Description                                                                                                 |
| ----------------------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `configuration`               | uint256 | bit 0: stable rate enabled <br/>bit 1: default borrow <br/>bit 4-19: fee <br/>bit 16-32: liquidation factor |
| `liquidityIndex`              | uint128 | liquidity index in ray                                                                                      |
| `variableBorrowIndex`         | uint128 | variable borrow index in ray                                                                                |
| `currentLiquidityRate`        | uint128 | current supply / liquidity / deposit rate in ray                                                            |
| `currentVariableBorrowRate`   | uint128 | current variable borrow rate in ray                                                                         |
| `currentStableBorrowRate`     | uint128 | current stable borrow rate in ray                                                                           |
| `lastUpdateTimestamp`         | uint40  | timestamp of when reserve data was last updated                                                             |
| `stFILAddress`                | address | address of associated stFILToken (tokenised stake)                                                          |
| `stableDebtTokenAddress`      | address | address of associated stable debt token                                                                     |
| `variableDebtTokenAddress`    | address | address of associated variable debt token                                                                   |
| `interestRateStrategyAddress` | address | address of interest rate strategy.                                                                     |

### **getReserveNormalizedIncome()**

**`function getReserveNormalizedIncome()`**

Returns the normalized income.

| Type    | Description                                                                                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| uint256 | A return value of _**1e27**_ indicates no income. As time passes, the income is accrued. A value of _**2 * 1e27**_ indicates that for each unit of asset, two units of income have been accrued. |

### **getReserveNormalizedVariableDebt()**

**`function getReserveNormalizedVariableDebt()`**

Returns the normalized variable debt.

#### Return values

| Type    | Description                                                                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| uint256 | A return value of _**1e27**_ indicates no debt. As time passes, the debt is accrued. A value of _**2 * 1e27**_ indicates that for each unit of asset, two units of debt have been accrued. |

### **getNodeData()**

Returns the state and configuration of the node

#### Call Params

| Parameter Name | Type    | Description                        |
| -------------- | ------- | ---------------------------------- |
| `actorId`      | uint64  | address of storage provider        |

#### Return values

| Parameter Name   | Type               | Description                                                                                                                                                                                                                                                                                                      |
| ---------------- | -------            | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |                                                          
| `nodeData`       | DataTypes.NodeData | **configuration:** bit 0: active <br/> bit 1: borrow <br/> bit 4-19: max leverage <br/> bit 20-35: liquidation threshold> <br/> **owner:** address of the node owner <br/> **operator:** address of the node operator  <br/> **safetyBuffer:** safety buffer of the node <br/> **role:** 1: owner 2: beneficiary |
| `balance`        | uint256            | underlying asset                                                                                                                                                                                                                                                                                                 |
| `stableDebt`     | uint256            | stable debt token                                                                                                                                                                                                                                                                                                |
| `variableDebt`   | uint256            | variable debt token                                                                                                                                                                                                                                                                                              |


### **paused()**

**`function paused()`**

Returns `true` if the StakingPool is paused.

#### Return values

| Type    | Description                  |
| ------- | ---------------------------- |
| bool    | the StakingPool paused state |

## ABI

<details>
<summary>StakingPool ABI</summary>

```
[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rateMode",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "borrowRate",
          "type": "uint256"
        }
      ],
      "name": "Borrow",
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
          "internalType": "address",
          "name": "liquidator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "award",
          "type": "uint256"
        }
      ],
      "name": "Liquidation",
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
          "name": "role",
          "type": "uint256"
        }
      ],
      "name": "NodeDelegate",
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
        }
      ],
      "name": "NodeUndelegateBeneficiary",
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
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "NodeUndelegateOwner",
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
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "OperatorChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rateMode",
          "type": "uint256"
        }
      ],
      "name": "Repay",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "availableLiquidity",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "liquidityRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "stableBorrowRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "variableBorrowRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "liquidityIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "variableBorrowIndex",
          "type": "uint256"
        }
      ],
      "name": "ReserveDataUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Stake",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Unstake",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "MIN_FIL_BORROW_AMOUNT",
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
      "name": "MIN_STAKE_FIL",
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
      "name": "RISK_RESERVE",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "approveOperator",
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
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rateMode",
          "type": "uint256"
        }
      ],
      "name": "borrow",
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
      "name": "delegateBeneficiary",
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
      "name": "delegateOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAddressesProvider",
      "outputs": [
        {
          "internalType": "contract IStakingPoolAddressesProvider",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
      "name": "getNodeData",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "data",
                  "type": "uint256"
                }
              ],
              "internalType": "struct DataTypes.NodeConfigurationMap",
              "name": "configuration",
              "type": "tuple"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "safetyBuffer",
              "type": "uint256"
            },
            {
              "internalType": "enum DataTypes.NodeRole",
              "name": "role",
              "type": "uint8"
            }
          ],
          "internalType": "struct DataTypes.NodeData",
          "name": "",
          "type": "tuple"
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
      "name": "getReserveData",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "data",
                  "type": "uint256"
                }
              ],
              "internalType": "struct DataTypes.PoolConfigurationMap",
              "name": "configuration",
              "type": "tuple"
            },
            {
              "internalType": "uint128",
              "name": "liquidityIndex",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "variableBorrowIndex",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "currentLiquidityRate",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "currentVariableBorrowRate",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "currentStableBorrowRate",
              "type": "uint128"
            },
            {
              "internalType": "uint40",
              "name": "lastUpdateTimestamp",
              "type": "uint40"
            },
            {
              "internalType": "address",
              "name": "stFILAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "stableDebtTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "variableDebtTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "interestRateStrategyAddress",
              "type": "address"
            }
          ],
          "internalType": "struct DataTypes.PoolReserveData",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getReserveNormalizedIncome",
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
      "name": "getReserveNormalizedVariableDebt",
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
      "name": "initStakingPool",
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
          "internalType": "uint64",
          "name": "actorId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        }
      ],
      "name": "liquidation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
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
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rateMode",
          "type": "uint256"
        }
      ],
      "name": "repay",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
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
          "name": "configuration",
          "type": "uint256"
        }
      ],
      "name": "setNodeConfiguration",
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
      "name": "setPause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "configuration",
          "type": "uint256"
        }
      ],
      "name": "setPoolConfiguration",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        }
      ],
      "name": "stake",
      "outputs": [],
      "stateMutability": "payable",
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
      "name": "undelegateBeneficiary",
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
      "name": "undelegateOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "unstake",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
]
```
</details>

