import { Component, OnInit } from '@angular/core';
import {UserState} from '../store/reducer/user.reducer';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PaymentService} from '../payment.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import { addUser } from '../store/action/user.actions';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-keep-in-touch',
  templateUrl: './keep-in-touch.component.html',
  styleUrls: ['./keep-in-touch.component.css']
})
export class KeepInTouchComponent implements OnInit {

  userForm: FormGroup;

  user: User;

  loading = false;
  submitted = false;
  error = '';

  constructor(
    private store: Store<UserState>,
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      monthlyAdvertisingBudget: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  get f(): any { return this.userForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    this.loading = true;

    if ( this.userForm.invalid) {
      this.loading = false;
      return;
    }

    this.addUser();
  }

  addUser(): void {
    this.paymentService.save(this.userForm.value);
    this.userForm.reset();
    this.loading = false;
    this.submitted = false;
    this.toastr.info('User as been added to state successfully');
  }

}
