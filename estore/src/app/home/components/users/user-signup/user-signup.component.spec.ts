import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserSignupComponent } from './user-signup.component';
import { UserService } from 'src/app/home/services/users/user-service.service';
import { UserServiceMock } from 'src/app/shared/mocks/user-service.service.mock';
import { ReactiveFormsModule } from "@angular/forms";
import { of, throwError } from 'rxjs';

fdescribe('UserRegistrationComponent', () => {
  let component: UserSignupComponent;
  let fixture: ComponentFixture<UserSignupComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSignupComponent],
      providers: [
        { provide: UserService, useClass: UserServiceMock }
      ],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSignupComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require value in firstName field', () => {
    component.firstName?.patchValue('');
    fixture.detectChanges();
    expect(component.firstName?.valid).toBeFalse();

    component.firstName?.patchValue('Tom');
    fixture.detectChanges();
    expect(component.firstName?.valid).toBeTrue();
  });

  it('should require valid email value', () => {
    component.email?.patchValue('');
    fixture.detectChanges();
    expect(component.email?.valid).toBeFalse();

    component.email?.patchValue('tom');
    fixture.detectChanges();
    expect(component.email?.valid).toBeFalse();

    component.email?.patchValue('tom@gmail.com');
    fixture.detectChanges();
    expect(component.email?.valid).toBeTrue();
  });

  it('should match password and confirmPassword fields', () => {
    component.password?.patchValue('pass1');
    component.confirmPassword?.patchValue('pass2');
    fixture.detectChanges();
    expect(component.userSignupForm.errors?.['passwordMismatch']).toBeTrue();

    component.password?.patchValue('pass1');
    component.confirmPassword?.patchValue('pass1');
    fixture.detectChanges();
    expect(component.userSignupForm.errors?.['passwordMismatch']).toBeUndefined();
  });

  it('should set suceess message for creating user successfully', fakeAsync(() => {
    spyOn(userService, 'createUser').and.returnValue(
      of({ message: 'success' })
    );

    component.onSubmit();
    tick();

    expect(component.alertMessage).toEqual('User created successfully');
    expect(component.alertType).toEqual(0);
  }));

  it('should set email error message if email already registered', fakeAsync(() => {
    spyOn(userService, 'createUser').and.returnValue(
      of({ message: 'Email already exists' })
    );

    component.onSubmit();
    tick();

    expect(component.alertMessage).toEqual('Email already exists');
    expect(component.alertType).toEqual(1);
  }));

  it('should set error message if error is received while creating user', fakeAsync(() => {
    spyOn(userService, 'createUser').and.returnValue(
      throwError(() => {
        const err = new Error();
        err.message = 'Errors occured';

        return err;
      })
    );

    component.onSubmit();
    tick();
    expect(component.alertMessage).toEqual('Errors occured');
    expect(component.alertType).toEqual(2);
  }))

});
