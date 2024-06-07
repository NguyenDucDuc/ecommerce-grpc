import { Observable } from 'rxjs';
import { CreateUserDto, LoginDto } from '../dtos/user-service/index';

export const UserPackageName = 'user';
export const UserServiceName = 'UserService';

export interface UserServiceClient {
  createUser(request: CreateUserDto): Observable<any>;
  loginUser(request: LoginDto): Observable<any>;
  createAdmin(request: CreateUserDto): Observable<any>;
}
