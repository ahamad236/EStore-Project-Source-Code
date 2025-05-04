import { Component, OnInit, OnDestroy } from '@angular/core';
import { PastOrder, PastOrderProduct } from '../../types/order.type';
import { OrderService } from '../../services/order/order.service';
import { UserService } from '../../services/users/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pastorders',
  templateUrl: './pastorders.component.html',
  styleUrls: ['./pastorders.component.scss'],
})
export class PastordersComponent implements OnInit, OnDestroy {
  pastOrderProducts: PastOrderProduct[] = [];
  pastOrder: PastOrder; 
  pastOrders: PastOrder[] = [];
  subscriptions: Subscription = new Subscription();
  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.orderService
        .getOrders(this.userService.loggedInUser.email)
        .subscribe((pastOrders) => {
          this.pastOrders = pastOrders;
        })
    );
  }

  selectOrder(event: any) {
    if (Number.parseInt(event.target.value) > 0) {
      this.pastOrder = this.pastOrders.filter(
        (order) => order.orderId === Number.parseInt(event.target.value)
      )[0];
      this.getOrderProducts(this.pastOrder.orderId);
    } else {
      this.pastOrder = <any>undefined;
      this.pastOrderProducts = [];
    }
  }

  getOrderProducts(orderId: number): void {
    this.subscriptions.add(
      this.orderService.getOrderProducts(orderId).subscribe(products => {
        this.pastOrderProducts = products
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
