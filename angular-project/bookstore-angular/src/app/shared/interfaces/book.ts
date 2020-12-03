import {IBase} from './base';
import {IUser} from './user';

export interface IBook extends IBase {
  subscribers: string[];
  reviews: string[];
  _id: string,
  bookName: string;
  userId: IUser;
}
