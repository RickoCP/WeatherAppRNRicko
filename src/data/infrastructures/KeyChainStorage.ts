import {IStorage} from './interfaces/iStorage';

class KeyChainStorage implements IStorage {
  private storage: any;

  constructor(storage: any) {
    this.storage = storage;
  }

  async get(name: string): Promise<any> {
    const token = await this.storage.getInternetCredentials(name);
    return token;
  }

  set(name: string, value: any): void {
    this.storage.setInternetCredentials(name, name, value);
  }

  remove(name: string): void {
    this.storage.resetInternetCredentials(name);
  }
}

export default KeyChainStorage;
