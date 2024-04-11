import SafeBaseContractWeb3 from '@safe-global/protocol-kit/adapters/web3/contracts/Safe/SafeBaseContractWeb3'
import { toTxResult } from '@safe-global/protocol-kit/adapters/web3/utils'
import Web3Adapter from '@safe-global/protocol-kit/adapters/web3/Web3Adapter'
import {
  DeepWriteable,
  SafeVersion,
  safe_1_2_0_ContractArtifacts,
  SafeContract_v1_2_0_Abi,
  SafeContract_v1_2_0_Contract,
  SafeContract_v1_2_0_Function,
  SafeTransaction,
  Web3TransactionOptions,
  Web3TransactionResult
} from '@safe-global/safe-core-sdk-types'

/**
 * SafeContract_v1_2_0_Web3 is the implementation specific to the Safe contract version 1.2.0.
 *
 * This class specializes in handling interactions with the Safe contract version 1.2.0 using Web3.js.
 *
 * @extends SafeBaseContractWeb3<SafeContract_v1_2_0_Abi> - Inherits from SafeBaseContractWeb3 with ABI specific to Safe contract version 1.2.0.
 * @implements SafeContract_v1_2_0_Contract - Implements the interface specific to Safe contract version 1.2.0.
 */
class SafeContract_v1_2_0_Web3
  extends SafeBaseContractWeb3<DeepWriteable<SafeContract_v1_2_0_Abi>>
  implements SafeContract_v1_2_0_Contract
{
  safeVersion: SafeVersion

  /**
   * Constructs an instance of SafeContract_v1_2_0_Web3
   *
   * @param chainId - The chain ID where the contract resides.
   * @param web3Adapter - An instance of Web3Adapter.
   * @param isL1SafeSingleton - A flag indicating if the contract is a L1 Safe Singleton.
   * @param customContractAddress - Optional custom address for the contract. If not provided, the address is derived from the Safe deployments based on the chainId and safeVersion.
   * @param customContractAbi - Optional custom ABI for the contract. If not provided, the default ABI for version 1.2.0 is used.
   */
  constructor(
    chainId: bigint,
    web3Adapter: Web3Adapter,
    isL1SafeSingleton = false,
    customContractAddress?: string,
    customContractAbi?: DeepWriteable<SafeContract_v1_2_0_Abi>
  ) {
    const safeVersion = '1.2.0'
    const defaultAbi = safe_1_2_0_ContractArtifacts.abi as DeepWriteable<SafeContract_v1_2_0_Abi>

    super(
      chainId,
      web3Adapter,
      defaultAbi,
      safeVersion,
      isL1SafeSingleton,
      customContractAddress,
      customContractAbi
    )

    this.safeVersion = safeVersion
  }

  /**
   * @returns Array[contractName]
   */
  NAME: SafeContract_v1_2_0_Function<'NAME'> = async () => {
    return [await this.contract.methods.NAME().call()]
  }

  /**
   * @returns Array[safeContractVersion]
   */
  VERSION: SafeContract_v1_2_0_Function<'VERSION'> = async () => {
    return [await this.contract.methods.VERSION().call()]
  }

  /**
   * @param args - Array[owner, txHash]
   * @returns Array[approvedHashes]
   */
  approvedHashes: SafeContract_v1_2_0_Function<'approvedHashes'> = async (args) => {
    return [await this.contract.methods.approvedHashes(...args).call()]
  }

  /**
   * @returns Array[domainSeparator]
   */
  domainSeparator: SafeContract_v1_2_0_Function<'domainSeparator'> = async () => {
    return [await this.contract.methods.domainSeparator().call()]
  }

  /**
   * Returns array of first 10 modules.
   * @returns Array[Array[modules]]
   */
  getModules: SafeContract_v1_2_0_Function<'getModules'> = async () => {
    return [await this.contract.methods.getModules().call()]
  }

  /**
   * Returns array of modules.
   * @param args - Array[start, pageSize]
   * @returns Array[Array[modules], next]
   */
  getModulesPaginated: SafeContract_v1_2_0_Function<'getModulesPaginated'> = async (args) => {
    const res = await this.contract.methods.getModulesPaginated(...args).call()
    return [res.array, res.next]
  }

  /**
   * Returns the list of Safe owner accounts.
   * @returns Array[Array[owners]]
   */
  getOwners: SafeContract_v1_2_0_Function<'getOwners'> = async () => {
    return [await this.contract.methods.getOwners().call()]
  }

  /**
   * Returns the Safe threshold.
   * @returns Array[threshold]
   */
  getThreshold: SafeContract_v1_2_0_Function<'getThreshold'> = async () => {
    return [await this.contract.methods.getThreshold().call()]
  }

  /**
   * Checks if a specific Safe module is enabled for the current Safe.
   * @param args - Array[moduleAddress]
   * @returns Array[isEnabled]
   */
  isModuleEnabled: SafeContract_v1_2_0_Function<'isModuleEnabled'> = async (args) => {
    return [await this.contract.methods.isModuleEnabled(...args).call()]
  }

  /**
   * Checks if a specific address is an owner of the current Safe.
   * @param args - Array[address]
   * @returns Array[isOwner]
   */
  isOwner: SafeContract_v1_2_0_Function<'isOwner'> = async (args) => {
    return [await this.contract.methods.isOwner(...args).call()]
  }

  /**
   * Returns the Safe nonce.
   * @returns Array[nonce]
   */
  nonce: SafeContract_v1_2_0_Function<'nonce'> = async () => {
    return [await this.contract.methods.nonce().call()]
  }

  /**
   * @param args - Array[messageHash]
   * @returns Array[signedMessages]
   */
  signedMessages: SafeContract_v1_2_0_Function<'signedMessages'> = async (args) => {
    return [await this.contract.methods.signedMessages(...args).call()]
  }

  /**
   * @param args - Array[message]
   * @returns Array[messageHash]
   */
  getMessageHash: SafeContract_v1_2_0_Function<'getMessageHash'> = async (args) => {
    return [await this.contract.methods.getMessageHash(...args).call()]
  }

  /**
   * Encodes the data for a transaction to the Safe contract.
   *
   * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
   * @returns Array[encodedData]
   */
  encodeTransactionData: SafeContract_v1_2_0_Function<'encodeTransactionData'> = async (args) => {
    return [await this.contract.methods.encodeTransactionData(...args).call()]
  }

  /**
   * Returns hash to be signed by owners.
   *
   * @param args - Array[to, value, data, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, _nonce]
   * @returns Array[transactionHash]
   */
  getTransactionHash: SafeContract_v1_2_0_Function<'getTransactionHash'> = async (args) => {
    return [await this.contract.methods.getTransactionHash(...args).call()]
  }

  /**
   * Marks a hash as approved. This can be used to validate a hash that is used by a signature.
   * @param hash - The hash that should be marked as approved for signatures that are verified by this contract.
   * @param options - Optional transaction options.
   * @returns Transaction result.
   */
  async approveHash(
    hash: string,
    options?: Web3TransactionOptions
  ): Promise<Web3TransactionResult> {
    if (options && !options.gas) {
      options.gas = (await this.estimateGas('approveHash', [hash], { ...options })).toString()
    }
    const txResponse = this.contract.methods.approveHash(hash).send(options)
    return toTxResult(txResponse, options)
  }

  /**
   * Executes a transaction.
   * @param safeTransaction - The Safe transaction to execute.
   * @param options - Transaction options.
   * @returns Transaction result.
   */
  async execTransaction(
    safeTransaction: SafeTransaction,
    options?: Web3TransactionOptions
  ): Promise<Web3TransactionResult> {
    if (options && !options.gas) {
      options.gas = (
        await this.estimateGas(
          'execTransaction',
          [
            safeTransaction.data.to,
            BigInt(safeTransaction.data.value),
            safeTransaction.data.data,
            safeTransaction.data.operation,
            BigInt(safeTransaction.data.safeTxGas),
            BigInt(safeTransaction.data.baseGas),
            BigInt(safeTransaction.data.gasPrice),
            safeTransaction.data.gasToken,
            safeTransaction.data.refundReceiver,
            safeTransaction.encodedSignatures()
          ],
          options
        )
      ).toString()
    }
    const txResponse = this.contract.methods
      .execTransaction(
        safeTransaction.data.to,
        BigInt(safeTransaction.data.value),
        safeTransaction.data.data,
        safeTransaction.data.operation,
        BigInt(safeTransaction.data.safeTxGas),
        BigInt(safeTransaction.data.baseGas),
        BigInt(safeTransaction.data.gasPrice),
        safeTransaction.data.gasToken,
        safeTransaction.data.refundReceiver,
        safeTransaction.encodedSignatures()
      )
      .send(options)

    return toTxResult(txResponse, options)
  }

  /**
   * Checks whether a given Safe transaction can be executed successfully with no errors.
   * @param safeTransaction - The Safe transaction to check.
   * @param options - Optional transaction options.
   * @returns True, if the given transactions is valid.
   */
  async isValidTransaction(
    safeTransaction: SafeTransaction,
    options?: Web3TransactionOptions
  ): Promise<boolean> {
    let isTxValid = false
    try {
      if (options && !options.gas) {
        options.gas = (
          await this.estimateGas(
            'execTransaction',
            [
              safeTransaction.data.to,
              BigInt(safeTransaction.data.value),
              safeTransaction.data.data,
              safeTransaction.data.operation,
              BigInt(safeTransaction.data.safeTxGas),
              BigInt(safeTransaction.data.baseGas),
              BigInt(safeTransaction.data.gasPrice),
              safeTransaction.data.gasToken,
              safeTransaction.data.refundReceiver,
              safeTransaction.encodedSignatures()
            ],
            options
          )
        ).toString()
      }
      isTxValid = await this.contract.methods
        .execTransaction(
          safeTransaction.data.to,
          BigInt(safeTransaction.data.value),
          safeTransaction.data.data,
          safeTransaction.data.operation,
          BigInt(safeTransaction.data.safeTxGas),
          BigInt(safeTransaction.data.baseGas),
          BigInt(safeTransaction.data.gasPrice),
          safeTransaction.data.gasToken,
          safeTransaction.data.refundReceiver,
          safeTransaction.encodedSignatures()
        )
        .call(options)
    } catch {}
    return isTxValid
  }
}

export default SafeContract_v1_2_0_Web3
