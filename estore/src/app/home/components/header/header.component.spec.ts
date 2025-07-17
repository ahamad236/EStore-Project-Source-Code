import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { UserService } from '../../services/users/user-service.service';
import { UserServiceMock } from 'src/app/shared/mocks/user-service.service.mock';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { CartStoreItemMock } from 'src/app/shared/mocks/cart.storeitem.mock';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { CategoriesStoreItemMock } from 'src/app/shared/mocks/categories.storeitem.mock';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReplaySubject } from 'rxjs';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  const eventSubject: ReplaySubject<RouterEvent> = new ReplaySubject<RouterEvent>(1);
  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
    events: eventSubject.asObservable()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: UserService, useClass: UserServiceMock },
        { provide: CartStoreItem, useClass: CartStoreItemMock },
        { provide: CategoriesStoreItem, useClass: CategoriesStoreItemMock },
        { provide: Router, useClass: routerMock }
      ],
      imports: [RouterTestingModule, FontAwesomeModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
