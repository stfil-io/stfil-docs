---
sidebar_position: 5
---

# StakingPoolAddressesProvider

Addresses register of the protocol for a particular market. This contract is immutable and the address will never change.

:::info
Whenever the `StakingPool` contract is needed, we recommended you fetch the correct address from the `StakingPoolAddressesProvider` smart contract.
:::

The source code can be [found on Github here](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/configuration/StakingPoolAddressesProvider.sol).

## AccessControl

AccessControl allows a _**Role Admin**_ to manage roles. _**Role Admin**_ is itself a role that is managed by the `DEFAULT_ADMIN_ROLE`.

## Methods

### getProxy**()**

**`getProxy(bytes32 proxyKey)`**

:::info
    bytes32 internal constant STAKING_POOL_CONFIGURATOR = keccak256('STAKING_POOL_CONFIGURATOR');
    bytes32 internal constant STAKING_POOL = keccak256('STAKING_POOL');
    bytes32 internal constant STFIL_TOKEN = keccak256('STFIL_TOKEN');
    bytes32 internal constant STABLE_DEBT_TOKEN = keccak256('STABLE_DEBT_TOKEN');
    bytes32 internal constant VARIABLE_DEBT_TOKEN = keccak256('VARIABLE_DEBT_TOKEN');
    bytes32 internal constant INTEREST_RATE_STRATEGY = keccak256('INTEREST_RATE_STRATEGY');
:::
For example, the [StakingPool](https://github.com/stfil-io/protocol/blob/main/contracts/protocol/stakingpool/StakingPool.sol) uses the proxyKey: 0x08d1f44dcaff773a7a8b50a8f7f313fc6b1b340ee8cef4d33a10e9357b4f1c17

#### Call Params

| Parameter Name | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| `proxyKey`     | bytes32 | A keccak256 string representation of the proxy key |

#### Return values

| Type    | Description                                           |
| ------- | ----------------------------------------------------- |
| address | The address associated with the bytes32 proxyKey used |

### hasRole**()**

**`hasRole(bytes32 role, address account)`**

:::info
    bytes32 internal constant POOL_ADMIN_ROLE = keccak256("POOL_ADMIN");
    bytes32 internal constant CONTRACTS_ADMIN_ROLE = keccak256("CONTRACTS_ADMIN");
    bytes32 internal constant EMERGENCY_ADMIN_ROLE = keccak256("EMERGENCY_ADMIN");
:::
For example, the _POOL_ADMIN_ role uses: 0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b

#### Call Params

| Parameter Name | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| `role`         | bytes32 | A keccak256 string representation of role          |
| `account`      | bytes32 | The address of the users                           |

#### Return values

| Type    | Description                      |
| ------- | -------------------------------- |
| bool    | The address has role permission  |

## ABI

<details>
<summary>Addresses Provider ABI</summary>

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
          "indexed": true,
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "ConfigurationAdminUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "EmergencyAdminUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "proxyKey",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newProxyAddress",
          "type": "address"
        }
      ],
      "name": "ProxyAddressSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "StakingPoolConfiguratorUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "StakingPoolUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "proxyKey",
          "type": "bytes32"
        }
      ],
      "name": "getProxy",
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
          "internalType": "bytes32",
          "name": "proxyKey",
          "type": "bytes32"
        }
      ],
      "name": "getProxyImplementation",
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
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
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
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "proxyKey",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "newProxyAddress",
          "type": "address"
        }
      ],
      "name": "setProxy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
          "internalType": "bytes32",
          "name": "proxyKey",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "upgrade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "proxyKey",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
]
```
</details>
