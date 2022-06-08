/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LANDRegistryInterface extends ethers.utils.Interface {
  functions: {
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "ping()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "setManyUpdateOperator(uint256[],address)": FunctionFragment;
    "decodeTokenId(uint256)": FunctionFragment;
    "updateOperator(uint256)": FunctionFragment;
    "setUpdateOperator(uint256,address)": FunctionFragment;
    "updateLandData(int256,int256,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ping", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setManyUpdateOperator",
    values: [BigNumberish[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeTokenId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOperator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setUpdateOperator",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLandData",
    values: [BigNumberish, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ping", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setManyUpdateOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decodeTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUpdateOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLandData",
    data: BytesLike
  ): Result;

  events: {};
}

export class LANDRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LANDRegistryInterface;

  functions: {
    safeTransferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ping(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setManyUpdateOperator(
      landIds: BigNumberish[],
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decodeTokenId(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    updateOperator(
      landId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUpdateOperator(
      assetId: BigNumberish,
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateLandData(
      x: BigNumberish,
      y: BigNumberish,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  safeTransferFrom(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ping(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ownerOf(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setManyUpdateOperator(
    landIds: BigNumberish[],
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decodeTokenId(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  updateOperator(
    landId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUpdateOperator(
    assetId: BigNumberish,
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateLandData(
    x: BigNumberish,
    y: BigNumberish,
    data: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    safeTransferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    ping(overrides?: CallOverrides): Promise<void>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    setManyUpdateOperator(
      landIds: BigNumberish[],
      operator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    decodeTokenId(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    updateOperator(
      landId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    setUpdateOperator(
      assetId: BigNumberish,
      operator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateLandData(
      x: BigNumberish,
      y: BigNumberish,
      data: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    safeTransferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ping(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setManyUpdateOperator(
      landIds: BigNumberish[],
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decodeTokenId(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateOperator(
      landId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUpdateOperator(
      assetId: BigNumberish,
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateLandData(
      x: BigNumberish,
      y: BigNumberish,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    safeTransferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ping(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setManyUpdateOperator(
      landIds: BigNumberish[],
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decodeTokenId(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateOperator(
      landId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUpdateOperator(
      assetId: BigNumberish,
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateLandData(
      x: BigNumberish,
      y: BigNumberish,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
