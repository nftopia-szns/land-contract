/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "ERC165Support",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Support__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Basic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Basic__factory>;
    getContractFactory(
      name: "ERC721BasicToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721BasicToken__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Metadata__factory>;
    getContractFactory(
      name: "ERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Token__factory>;
    getContractFactory(
      name: "EstateRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EstateRegistry__factory>;
    getContractFactory(
      name: "EstateStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EstateStorage__factory>;
    getContractFactory(
      name: "IEstateRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEstateRegistry__factory>;
    getContractFactory(
      name: "IMiniMeToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMiniMeToken__factory>;
    getContractFactory(
      name: "LANDRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LANDRegistry__factory>;
    getContractFactory(
      name: "Migratable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migratable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "ERC721Base",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Base__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Metadata__factory>;
    getContractFactory(
      name: "FullAssetRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FullAssetRegistry__factory>;
    getContractFactory(
      name: "IApplication",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IApplication__factory>;
    getContractFactory(
      name: "IERC721Base",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Base__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IEstateRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEstateRegistry__factory>;
    getContractFactory(
      name: "ILANDRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILANDRegistry__factory>;
    getContractFactory(
      name: "IMetadataHolder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMetadataHolder__factory>;
    getContractFactory(
      name: "IMiniMeToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMiniMeToken__factory>;
    getContractFactory(
      name: "LANDRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LANDRegistry__factory>;
    getContractFactory(
      name: "LANDStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LANDStorage__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "OwnableStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableStorage__factory>;
    getContractFactory(
      name: "ProxyStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyStorage__factory>;
    getContractFactory(
      name: "Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Storage__factory>;

    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "ERC165Support",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Support>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Basic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Basic>;
    getContractAt(
      name: "ERC721BasicToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721BasicToken>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Metadata>;
    getContractAt(
      name: "ERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Receiver>;
    getContractAt(
      name: "ERC721Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Token>;
    getContractAt(
      name: "EstateRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EstateRegistry>;
    getContractAt(
      name: "EstateStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EstateStorage>;
    getContractAt(
      name: "IEstateRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEstateRegistry>;
    getContractAt(
      name: "IMiniMeToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMiniMeToken>;
    getContractAt(
      name: "LANDRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LANDRegistry>;
    getContractAt(
      name: "Migratable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migratable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "ERC721Base",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Base>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Metadata>;
    getContractAt(
      name: "FullAssetRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FullAssetRegistry>;
    getContractAt(
      name: "IApplication",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IApplication>;
    getContractAt(
      name: "IERC721Base",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Base>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IEstateRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEstateRegistry>;
    getContractAt(
      name: "ILANDRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILANDRegistry>;
    getContractAt(
      name: "IMetadataHolder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMetadataHolder>;
    getContractAt(
      name: "IMiniMeToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMiniMeToken>;
    getContractAt(
      name: "LANDRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LANDRegistry>;
    getContractAt(
      name: "LANDStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LANDStorage>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "OwnableStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableStorage>;
    getContractAt(
      name: "ProxyStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyStorage>;
    getContractAt(
      name: "Storage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Storage>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
