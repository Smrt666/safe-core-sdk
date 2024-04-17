import MultiSendCallOnlyBaseContractWeb3 from '@safe-global/protocol-kit/adapters/web3/contracts/MultiSend/MultiSendCallOnlyBaseContractWeb3'
import Web3Adapter from '@safe-global/protocol-kit/adapters/web3/Web3Adapter'
import {
  DeepWriteable,
  SafeVersion,
  MultiSendCallOnlyContract_v1_4_1_Abi,
  MultiSendCallOnlyContract_v1_4_1_Contract,
  multiSendCallOnly_1_4_1_ContractArtifacts
} from '@safe-global/safe-core-sdk-types'

/**
 * MultiSendCallOnlyContract_v1_4_1_Web3 is the implementation specific to the MultiSendCallOnly contract version 1.4.1.
 *
 * This class specializes in handling interactions with the MultiSendCallOnly contract version 1.4.1 using Web3.js v6.
 *
 * @extends MultiSendCallOnlyBaseContractWeb3<MultiSendCallOnlyContract_v1_4_1_Abi> - Inherits from MultiSendBaseContractWeb3 with ABI specific to MultiSendCallOnly contract version 1.4.1.
 * @implements MultiSendContract_v1_4_1_Contract - Implements the interface specific to MultiSendCallOnly contract version 1.4.1.
 */
class MultiSendCallOnlyContract_v1_4_1_Web3
  extends MultiSendCallOnlyBaseContractWeb3<DeepWriteable<MultiSendCallOnlyContract_v1_4_1_Abi>>
  implements MultiSendCallOnlyContract_v1_4_1_Contract
{
  safeVersion: SafeVersion

  /**
   * Constructs an instance of MultiSendCallOnlyContract_v1_4_1_Web3
   *
   * @param chainId - The chain ID where the contract resides.
   * @param web3Adapter - An instance of Web3Adapter.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the MultiSendCallOnly deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.4.1 is used.
   */
  constructor(
    chainId: bigint,
    web3Adapter: Web3Adapter,
    customContractAddress?: string,
    customContractAbi?: DeepWriteable<MultiSendCallOnlyContract_v1_4_1_Abi>
  ) {
    const safeVersion = '1.4.1'
    const defaultAbi =
      multiSendCallOnly_1_4_1_ContractArtifacts.abi as DeepWriteable<MultiSendCallOnlyContract_v1_4_1_Abi>

    super(chainId, web3Adapter, defaultAbi, safeVersion, customContractAddress, customContractAbi)

    this.safeVersion = safeVersion
  }
}

export default MultiSendCallOnlyContract_v1_4_1_Web3
