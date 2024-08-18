import { Component, inject } from '@angular/core';
import { ProductStateService } from '../../services/products-state.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: []
})
export default class ProductListComponent {
  productsState = inject(ProductStateService)
}
