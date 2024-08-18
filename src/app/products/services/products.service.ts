/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/ui/header/services/base-http.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';


const limit = 5;
@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseHttpService {
  getProducts(page: number): Observable<Product[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`, {
      params: { limit: page * limit },
    });
  }
}
