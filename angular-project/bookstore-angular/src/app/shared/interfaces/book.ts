import {IBase} from './base';
import {IUser} from './user';

export interface IBook<T = string> extends IBase {
  subscribers: string[];
  reviews: T[];
  _id: string,
  bookName: string;
  userId: IUser;
}
