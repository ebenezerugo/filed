import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {UserState} from './store/reducer/user.reducer';
import {select, Store} from '@ngrx/store';
import {selectUsers} from './store/selector/user.selectors';
import {PaymentService} from './payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'filed';

  users$: Observable<User[]>;

  constructor(private paymentService: PaymentService) {
    this.users$ = this.paymentService.users$;
  }

  ngOnInit(): void {}

}
