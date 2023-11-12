import {IStorage} from './interfaces/iStorage';

class MobileStorage implements IStorage {
  private storage: any;

  constructor(storage: any) {
    this.storage = storage;
  }

  async get(name: string): Promise<any> {
    return this.storage.getItem(name);
  }

  async set(name: string, value: any): Promise<void> {
    await this.storage.setItem(name, value);
  }

  remove(name: string): void {
    this.storage.removeItem(name);
  }
}

export default MobileStorage;
