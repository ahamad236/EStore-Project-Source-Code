import { Observable, of } from 'rxjs';
import { loggedInUser } from 'src/app/home/types/user.type';

export class UserServiceMock {
    isUserAuthenticated: any;
    isUserAuthenticated$: Observable<boolean> = of(false);
    loggedInUser$: Observable<loggedInUser> = of<loggedInUser>();
    loggedInUser: any;
    token: any;
    createUser(): any { };
    login(): any { };
    activateToken(): any { };
    logout(): any { };
    loadToken(): any { };
}