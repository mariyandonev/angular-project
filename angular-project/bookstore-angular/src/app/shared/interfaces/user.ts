import {IBase} from './base';

export interface IUser extends IBase{
  books: string[];
  reviews: string[];
  _id: string;
  email: string;
  username: string;
  password: string;
}
