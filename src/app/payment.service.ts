import { Injectable } from '@angular/core';
import {addUser} from './store/action/user.actions';
import {User} from '../model/user';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private readonly userSource = new BehaviorSubject<User[]>([]);

  readonly users$ = this.userSource.asObservable();

  constructor() { }

  getUsers(): User[] {
    return this.userSource.getValue();
  }

  private setUsers(users: User[]): void {
    this.userSource.next(users);
  }

  save(user: User): void {
    const users = [...this.getUsers(), user];
    this.setUsers(users);
  }

}
