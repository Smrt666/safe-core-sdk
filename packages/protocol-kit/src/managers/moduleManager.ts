import { isRestrictedAddress, sameString } from '@safe-global/protocol-kit/utils/address'
import { SENTINEL_ADDRESS } from '@safe-global/protocol-kit/utils/constants'
import { EthAdapter } from '@safe-global/protocol-kit/adapters/ethAdapter'
import { SafeContractImplementationType } from '@safe-global/protocol-kit/types'

class ModuleManager {
  #ethAdapter: EthAdapter
  #safeContract?: SafeContractImplementationType

  constructor(ethAdapter: EthAdapter, safeContract?: SafeContractImplementationType) {
    this.#ethAdapter = ethAdapter
    this.#safeContract = safeContract
  }

  private validateModuleAddress(moduleAddress: string): void {
    const isValidAddress = this.#ethAdapter.isAddress(moduleAddress)
    if (!isValidAddress || isRestrictedAddress(moduleAddress)) {
      throw new Error('Invalid module address provided')
    }
  }

  private validateModuleIsNotEnabled(moduleAddress: string, modules: string[]): void {
    const moduleIndex = modules.findIndex((module: string) => sameString(module, moduleAddress))
    const isEnabled = moduleIndex >= 0
    if (isEnabled) {
      throw new Error('Module provided is already enabled')
    }
  }

  private validateModuleIsEnabled(moduleAddress: string, modules: string[]): number {
    const moduleIndex = modules.findIndex((module: string) => sameString(module, moduleAddress))
    const isEnabled = moduleIndex >= 0
    if (!isEnabled) {
      throw new Error('Module provided is not enabled yet')
    }
    return moduleIndex
  }

  async getModules(): Promise<string[]> {
    if (!this.#safeContract) {
      throw new Error('Safe is not deployed')
    }

    const [modules] = await this.#safeContract.getModules()

    return [...modules]
  }

  async getModulesPaginated(start: string, pageSize: number): Promise<string[]> {
    if (!this.#safeContract) {
      throw new Error('Safe is not deployed')
    }
    return this.#safeContract.getModulesPaginated(start, pageSize)
  }

  async isModuleEnabled(moduleAddress: string): Promise<boolean> {
    if (!this.#safeContract) {
      throw new Error('Safe is not deployed')
    }

    const [isModuleEnabled] = await this.#safeContract.isModuleEnabled([moduleAddress])

    return isModuleEnabled
  }

  async encodeEnableModuleData(moduleAddress: string): Promise<string> {
    if (!this.#safeContract) {
      throw new Error('Safe is not deployed')
    }
    this.validateModuleAddress(moduleAddress)
    const modules = await this.getModules()
    this.validateModuleIsNotEnabled(moduleAddress, modules)
    return this.#safeContract.encode('enableModule', [moduleAddress])
  }

  async encodeDisableModuleData(moduleAddress: string): Promise<string> {
    if (!this.#safeContract) {
      throw new Error('Safe is not deployed')
    }
    this.validateModuleAddress(moduleAddress)
    const modules = await this.getModules()
    const moduleIndex = this.validateModuleIsEnabled(moduleAddress, modules)
    const prevModuleAddress = moduleIndex === 0 ? SENTINEL_ADDRESS : modules[moduleIndex - 1]
    return this.#safeContract.encode('disableModule', [prevModuleAddress, moduleAddress])
  }
}

export default ModuleManager
