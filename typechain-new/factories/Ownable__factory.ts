/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ownable, OwnableInterface } from "../Ownable";

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "contractName",
        type: "string",
      },
      {
        name: "migrationId",
        type: "string",
      },
    ],
    name: "isMigrated",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_sender",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "contractName",
        type: "string",
      },
      {
        indexed: false,
        name: "migrationId",
        type: "string",
      },
    ],
    name: "Migrated",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d4f806100206000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680638129fc1c146100725780638da5cb5b14610089578063c0bac1a8146100e0578063c4d66de8146101a7578063f2fde38b146101ea575b600080fd5b34801561007e57600080fd5b5061008761022d565b005b34801561009557600080fd5b5061009e6105fe565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100ec57600080fd5b5061018d600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610624565b604051808215151515815260200191505060405180910390f35b3480156101b357600080fd5b506101e8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061070f565b005b3480156101f657600080fd5b5061022b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b22565b005b6040805190810160405280600a81526020017f4d696772617461626c65000000000000000000000000000000000000000000008152506040805190810160405280600581526020017f312e322e310000000000000000000000000000000000000000000000000000008152506102d8826040805190810160405280600b81526020017f696e697469616c697a6564000000000000000000000000000000000000000000815250610c7a565b6102e28282610c7a565b7fdd117a11c22118c9dee4b5a67ce578bc44529dce21ee0ccc439588fbb9fb4ea38282604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561034957808201518184015260208101905061032e565b50505050905090810190601f1680156103765780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156103af578082015181840152602081019050610394565b50505050905090810190601f1680156103dc5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160016000836040518082805190602001908083835b6020831015156104255780518252602082019150602081019050602083039250610400565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020826040518082805190602001908083835b60208310151561048e5780518252602082019150602081019050602083039250610469565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff02191690831515021790555060016000836040518082805190602001908083835b60208310151561051257805182526020820191506020810190506020830392506104ed565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206040805190810160405280600b81526020017f696e697469616c697a65640000000000000000000000000000000000000000008152506040518082805190602001908083835b6020831015156105b0578051825260208201915060208101905060208303925061058b565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff0219169083151502179055505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080836040518082805190602001908083835b60208310151561065d5780518252602082019150602081019050602083039250610638565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020826040518082805190602001908083835b6020831015156106c657805182526020820191506020810190506020830392506106a1565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900460ff16905092915050565b6040805190810160405280600781526020017f4f776e61626c65000000000000000000000000000000000000000000000000008152506040805190810160405280600581526020017f312e392e300000000000000000000000000000000000000000000000000000008152506107ba826040805190810160405280600b81526020017f696e697469616c697a6564000000000000000000000000000000000000000000815250610c7a565b6107c48282610c7a565b82600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdd117a11c22118c9dee4b5a67ce578bc44529dce21ee0ccc439588fbb9fb4ea38282604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561086c578082015181840152602081019050610851565b50505050905090810190601f1680156108995780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156108d25780820151818401526020810190506108b7565b50505050905090810190601f1680156108ff5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160016000836040518082805190602001908083835b6020831015156109485780518252602082019150602081019050602083039250610923565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020826040518082805190602001908083835b6020831015156109b1578051825260208201915060208101905060208303925061098c565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff02191690831515021790555060016000836040518082805190602001908083835b602083101515610a355780518252602082019150602081019050602083039250610a10565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206040805190810160405280600b81526020017f696e697469616c697a65640000000000000000000000000000000000000000008152506040518082805190602001908083835b602083101515610ad35780518252602082019150602081019050602083039250610aae565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548160ff021916908315150217905550505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b7e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610bba57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610c848282610624565b151515610d1f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001807f52657175657374656420746172676574206d6967726174696f6e20494420686181526020017f7320616c7265616479206265656e2072756e000000000000000000000000000081525060400191505060405180910390fd5b50505600a165627a7a72305820ec51ba469e42c80846543f9e4d885bae6795e9cf0825e39f07821c1c8d45cfc60029";

export class Ownable__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Ownable> {
    return super.deploy(overrides || {}) as Promise<Ownable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Ownable {
    return super.attach(address) as Ownable;
  }
  connect(signer: Signer): Ownable__factory {
    return super.connect(signer) as Ownable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableInterface {
    return new utils.Interface(_abi) as OwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Ownable {
    return new Contract(address, _abi, signerOrProvider) as Ownable;
  }
}
