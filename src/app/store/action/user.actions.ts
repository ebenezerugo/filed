import { createAction, props } from '@ngrx/store';
import {User} from '../../../model/user';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const addUser = createAction( '[User] Add User',
  (user: User) => ({user})
);

