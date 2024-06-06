import { Observable } from 'rxjs';
import { CreateUserDto } from '../dtos/user-service/index';

export const UserPackageName = 'user';
export const UserServiceName = 'UserService';

export interface UserServiceClient {
  createUser(request: CreateUserDto): Observable<any>;
}
