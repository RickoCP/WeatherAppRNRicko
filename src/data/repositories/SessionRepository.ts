import {ISessionRepository} from '@domains/useCases/repository-interfaces/iSession';
import {IUserDTO} from '@domains/dto/UserDTO';
import {IHttp} from '@data/infrastructures/interfaces/iHttp';
import {IStorage} from '@data/infrastructures/interfaces/iStorage';
import {BASE_URL_DUMMY} from '@env';

class SessionRepository implements ISessionRepository {
  constructor(
    private readonly http: IHttp,
    private readonly storage: IStorage,
  ) {}

  async login(userDTO: IUserDTO): Promise<any> {
    const response = await this.http.request({
      method: 'POST',
      url: BASE_URL_DUMMY + 'auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username: userDTO.id,
        password: userDTO.pw,
      },
    });

    if (response?.token) {
      return response.token;
    }
  }

  async getToken(): Promise<string> {
    const dataTokenRepo = await this.storage.get('token');
    if (dataTokenRepo?.password) {
      const token = JSON.parse(dataTokenRepo.password).token;
      return token;
    } else {
      return '';
    }
  }

  setToken(token: string): void {
    const inputToken = JSON.stringify({token: token});
    this.storage.set('token', inputToken);
  }

  removeToken(): void {
    this.storage.remove('token');
  }
}

export default SessionRepository;
