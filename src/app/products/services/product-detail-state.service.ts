import { inject, Injectable } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductService } from './products.service';
import { signalSlice } from 'ngxtension/signal-slice';
import { map, Observable, switchMap } from 'rxjs';

interface State {
  product: Product | null;
  status: 'loading' | 'success' | 'error';
  page: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductDetailStateService {
  private productsService = inject(ProductService);
  private initialState: State = {
    product: null,
    status: 'loading' as const,
    page: 1,
  };

  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.productsService.getProduct(id)),
          map((data) => ({ product: data, status: 'success' as const })),
        ),
    },
  });
}
