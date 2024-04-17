import CompatibilityFallbackHandlerBaseContractEthers from '@safe-global/protocol-kit/adapters/ethers/contracts/CompatibilityFallbackHandler/CompatibilityFallbackHandlerBaseContractEthers'
import EthersAdapter from '@safe-global/protocol-kit/adapters/ethers/EthersAdapter'
import {
  compatibilityFallbackHandler_1_4_1_ContractArtifacts,
  CompatibilityFallbackHandlerContract_v1_4_1_Abi,
  CompatibilityFallbackHandlerContract_v1_4_1_Contract,
  SafeVersion
} from '@safe-global/safe-core-sdk-types'

/**
 * CompatibilityFallbackHandlerContract_v1_4_1_Ethers is the implementation specific to the CompatibilityFallbackHandler contract version 1.4.1.
 *
 * This class specializes in handling interactions with the CompatibilityFallbackHandler contract version 1.4.1 using Ethers.js v6.
 *
 * @extends CompatibilityFallbackHandlerBaseContractEthers<CompatibilityFallbackHandlerContract_v1_4_1_Abi> - Inherits from CompatibilityFallbackHandlerBaseContractEthers with ABI specific to CompatibilityFallbackHandler contract version 1.4.1.
 * @implements CompatibilityFallbackHandlerContract_v1_4_1_Contract - Implements the interface specific to CompatibilityFallbackHandler contract version 1.4.1.
 */
class CompatibilityFallbackHandlerContract_v1_4_1_Ethers
  extends CompatibilityFallbackHandlerBaseContractEthers<CompatibilityFallbackHandlerContract_v1_4_1_Abi>
  implements CompatibilityFallbackHandlerContract_v1_4_1_Contract
{
  safeVersion: SafeVersion

  /**
   * Constructs an instance of CompatibilityFallbackHandlerContract_v1_4_1_Ethers
   *
   * @param chainId - The chain ID where the contract resides.
   * @param ethersAdapter - An instance of EthersAdapter.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the CompatibilityFallbackHandler deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   */
  constructor(
    chainId: bigint,
    ethersAdapter: EthersAdapter,
    customContractAddress?: string,
    customContractAbi?: CompatibilityFallbackHandlerContract_v1_4_1_Abi
  ) {
    const safeVersion = '1.4.1'
    const defaultAbi = compatibilityFallbackHandler_1_4_1_ContractArtifacts.abi

    super(chainId, ethersAdapter, defaultAbi, safeVersion, customContractAddress, customContractAbi)

    this.safeVersion = safeVersion
  }
}

export default CompatibilityFallbackHandlerContract_v1_4_1_Ethers
