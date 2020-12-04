import {IBase} from './base';
import {IUser} from './user';
import {IBook} from './book';

export interface IReview extends IBase {
  likes: number[];
  text: string;
  _id: string;
  userId: IUser;
  bookId: IBook;
}
