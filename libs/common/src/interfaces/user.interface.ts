import { Request } from 'express';

export interface IRequestWithUser extends Request {
  user: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    phone: string;
    roles: string[];
  };
}
