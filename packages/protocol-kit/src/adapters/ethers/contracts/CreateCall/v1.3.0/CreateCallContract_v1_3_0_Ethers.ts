import CreateCallBaseContractEthers from '@safe-global/protocol-kit/adapters/ethers/contracts/CreateCall/CreateCallBaseContractEthers'
import EthersAdapter from '@safe-global/protocol-kit/adapters/ethers/EthersAdapter'
import {
  SafeVersion,
  CreateCallContract_v1_3_0_Abi,
  CreateCallContract_v1_3_0_Contract,
  createCall_1_3_0_ContractArtifacts,
  AdapterSpecificContractFunction,
  EthersTransactionOptions
} from '@safe-global/safe-core-sdk-types'
import { toTxResult } from '@safe-global/protocol-kit/adapters/ethers/utils'

/**
 * CreateCallContract_V1_3_0_Ethers is the implementation specific to the CreateCall contract version 1.3.0.
 *
 * This class specializes in handling interactions with the CreateCall contract version 1.3.0 using Ethers.js v6.
 *
 * @extends CreateCallBaseContractEthers<CreateCallContract_v1_3_0_Abi> - Inherits from CreateCallBaseContractEthers with ABI specific to CreateCall contract version 1.3.0.
 * @implements CreateCallContract_v1_3_0_Contract - Implements the interface specific to CreateCall contract version 1.3.0.
 */
class CreateCallContract_V1_3_0_Ethers
  extends CreateCallBaseContractEthers<CreateCallContract_v1_3_0_Abi>
  implements CreateCallContract_v1_3_0_Contract
{
  safeVersion: SafeVersion

  /**
   * Constructs an instance of CreateCallContract_V1_3_0_Ethers
   *
   * @param chainId - The chain ID where the contract resides.
   * @param ethersAdapter - An instance of EthersAdapter.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the CreateCall deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.3.0 is used.
   */
  constructor(
    chainId: bigint,
    ethersAdapter: EthersAdapter,
    customContractAddress?: string,
    customContractAbi?: CreateCallContract_v1_3_0_Abi
  ) {
    const safeVersion = '1.3.0'
    const defaultAbi = createCall_1_3_0_ContractArtifacts.abi

    super(chainId, ethersAdapter, defaultAbi, safeVersion, customContractAddress, customContractAbi)

    this.safeVersion = safeVersion
  }

  /**
   * @param args - Array[value, deploymentData]
   * @param options - EthersTransactionOptions
   * @returns Promise<EthersTransactionResult>
   */
  performCreate: AdapterSpecificContractFunction<
    CreateCallContract_v1_3_0_Abi,
    'performCreate',
    EthersTransactionOptions
  > = async (args, options) => {
    if (options && !options.gasLimit) {
      options.gasLimit = (
        await this.estimateGas('performCreate', [...args], { ...options })
      ).toString()
    }
    const txResponse = await this.contract.performCreate(...args, { ...options })
    return toTxResult(txResponse, options)
  }

  /**
   * @param args - Array[value, deploymentData, salt]
   * @param options - EthersTransactionOptions
   * @returns Promise<EthersTransactionResult>
   */
  performCreate2: AdapterSpecificContractFunction<
    CreateCallContract_v1_3_0_Abi,
    'performCreate2',
    EthersTransactionOptions
  > = async (args, options) => {
    if (options && !options.gasLimit) {
      options.gasLimit = (await this.estimateGas('performCreate2', args, options)).toString()
    }
    const txResponse = await this.contract.performCreate2(...args)
    return toTxResult(txResponse, options)
  }
}

export default CreateCallContract_V1_3_0_Ethers
