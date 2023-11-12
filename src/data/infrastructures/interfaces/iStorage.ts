export interface IStorage {
  get(name: string): Promise<any>;
  set(name: string, value: any): any;
  remove(name: string): void;
}
