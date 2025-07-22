import { Observable, of } from 'rxjs';
import { loggedInUser } from 'src/app/home/types/user.type';

export class UserServiceMock {
    isUserAuthenticated: any;
    isUserAuthenticated$: Observable<boolean> = of(true);
    loggedInUser$: Observable<loggedInUser> = of<loggedInUser>();
    loggedInUser: any;
    token: any = 'token123';
    createUser(): any { };
    login(): any { };
    activateToken(): any { };
    logout(): any { };
    loadToken(): any { };
}