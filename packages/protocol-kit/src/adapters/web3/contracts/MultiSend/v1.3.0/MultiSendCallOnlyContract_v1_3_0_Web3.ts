import MultiSendCallOnlyBaseContractWeb3 from '@safe-global/protocol-kit/adapters/web3/contracts/MultiSend/MultiSendCallOnlyBaseContractWeb3'
import Web3Adapter from '@safe-global/protocol-kit/adapters/web3/Web3Adapter'
import {
  DeepWriteable,
  SafeVersion,
  MultiSendCallOnlyContract_v1_3_0_Abi,
  MultiSendCallOnlyContract_v1_3_0_Contract,
  multiSendCallOnly_1_3_0_ContractArtifacts
} from '@safe-global/safe-core-sdk-types'

/**
 * MultiSendCallOnlyContract_v1_3_0_Web3 is the implementation specific to the MultiSendCallOnly contract version 1.3.0.
 *
 * This class specializes in handling interactions with the MultiSendCallOnly contract version 1.3.0 using Web3.js v6.
 *
 * @extends MultiSendCallOnlyBaseContractWeb3<MultiSendCallOnlyContract_v1_3_0_Abi> - Inherits from MultiSendCallOnlyBaseContractWeb3 with ABI specific to MultiSendCallOnly contract version 1.3.0.
 * @implements MultiSendCallOnlyContract_v1_3_0_Contract - Implements the interface specific to MultiSendCallOnly contract version 1.3.0.
 */
class MultiSendCallOnlyContract_v1_3_0_Web3
  extends MultiSendCallOnlyBaseContractWeb3<DeepWriteable<MultiSendCallOnlyContract_v1_3_0_Abi>>
  implements MultiSendCallOnlyContract_v1_3_0_Contract
{
  safeVersion: SafeVersion

  /**
   * Constructs an instance of SafeContract_v1_3_0_Web3
   *
   * @param chainId - The chain ID where the contract resides.
   * @param web3Adapter - An instance of Web3Adapter.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the MultiSendCallOnly deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.3.0 is used.
   */
  constructor(
    chainId: bigint,
    web3Adapter: Web3Adapter,
    customContractAddress?: string,
    customContractAbi?: DeepWriteable<MultiSendCallOnlyContract_v1_3_0_Abi>
  ) {
    const safeVersion = '1.3.0'
    const defaultAbi =
      multiSendCallOnly_1_3_0_ContractArtifacts.abi as DeepWriteable<MultiSendCallOnlyContract_v1_3_0_Abi>

    super(chainId, web3Adapter, defaultAbi, safeVersion, customContractAddress, customContractAbi)

    this.safeVersion = safeVersion
  }
}

export default MultiSendCallOnlyContract_v1_3_0_Web3
