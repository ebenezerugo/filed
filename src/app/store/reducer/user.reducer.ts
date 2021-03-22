import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../action/user.actions';
import {User} from '../../../model/user';


export const userFeatureKey = 'user';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [{
    firstName: 'Tobi',
    lastName: 'Dan',
    email: 'tobi@example.com',
    monthlyAdvertisingBudget: 5000,
    phoneNumber: +2348065148880
  }]
};


export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser,
    (state: UserState, {user}) =>
      ({...state,
        users: [...state.users, user]
    })
  )
);

export function reducer(state: UserState, action: Action): any {
  return userReducer(state, action);
}

