import {IBase} from './base';

export interface IUser extends IBase{
  books: string[];
  reviews: string[];
  email: string;
  username: string;
  password: string;
}
