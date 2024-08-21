import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../services/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../services/cart-state.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductDetailStateService).state;
  id = input.required<string>();
  cartState = inject(CartStateService).state;

  constructor() {
    effect(() => {
      console.log(this.id());
      this.productDetailState.getById(this.id());
    });
  }

  addToCart() {
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    });
  }
}
