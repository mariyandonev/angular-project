import {IBase} from './base';
import {IUser} from './user';

export interface IBook<T = string> extends IBase {
  subscribers: string[];
  reviews: T[];
  bookPrice: number;
  bookAuthor: string;
  bookName: string;
  userId: IUser;
}
