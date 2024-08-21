import { Component, inject } from '@angular/core';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { CartStateService } from '../products/services/cart-state.service';
import { ProductItemCart } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styles: ``,
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(id: number): void {
    this.state.remove(id);
  }

  onDecrease(product: ProductItemCart): void {
    this.state.update({
      product: product.product,
      quantity: product.quantity - 1,
    })
    if(product.quantity < 1){
      this.onRemove(product.product.id);
    }
  }

  onIncrease(product: ProductItemCart) {
    this.state.update({
      ...product,
      quantity: product.quantity + 1,
    })
  }
}
