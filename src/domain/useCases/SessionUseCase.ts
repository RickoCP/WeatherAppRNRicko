import {IUserDTO} from '@domains/dto/UserDTO';
import {ISessionUseCase} from './interfaces/iSession';
import {ISessionRepository} from './repository-interfaces/iSession';

class SessionUseCase implements ISessionUseCase {
  constructor(private readonly sessionRepo: ISessionRepository) {}

  async login(userDTO: IUserDTO): Promise<string> {
    const token = await this.sessionRepo.login(userDTO);
    this.setToken(token);
    return token;
  }

  getToken(): Promise<string> {
    return this.sessionRepo.getToken();
  }

  setToken(token: string): void {
    this.sessionRepo.setToken(token);
  }

  removeToken(): void {
    this.sessionRepo.removeToken();
  }
}

export default SessionUseCase;
