import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { CartStoreItem } from '../cart/cart.storeItem';
import { CartStoreItemMock } from 'src/app/shared/mocks/cart.storeitem.mock';
import { UserService } from '../users/user-service.service';
import { UserServiceMock } from 'src/app/shared/mocks/user-service.service.mock';
import { DeliveryAddress } from '../../types/cart.type';

fdescribe('OrderService', () => {
  let service: OrderService;
  let httptestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OrderService,
        { provide: CartStoreItem, useClass: CartStoreItemMock },
        { provide: UserService, useClass: UserServiceMock }
      ]
    });
    service = TestBed.inject(OrderService);
    httptestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call post query on save orders', () => {
    const deliveryAddress: DeliveryAddress = {
      userName: "Ahamad",
      address: "236/a, near murali yadav residency",
      city: "Hyderabad",
      state: "Telangana",
      pin: "520003"
    };

    const userEmail: string = 'ahamad@gmail.com';

    service.saveOrder(deliveryAddress, userEmail).subscribe();

    const request: TestRequest = httptestingController.expectOne(
      (req) => req.url === 'http://localhost:5001/orders/add'
    );

    expect(request.request.method).toBe('POST');
    expect(request.request.headers.keys()).toEqual(['authorization']);
    expect(request.request.headers.get('authorization')).toEqual('token123');
  })
});
