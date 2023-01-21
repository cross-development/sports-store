// Core
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// Packages
import { Observable, map } from 'rxjs';
// Models
import { Order } from './order.model';
import { Product } from './product.model';

const PROTOCOL = 'http';
const PORT = 3500;

enum RequestMethod {
  GET = 'GET',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

@Injectable()
export class RestDataSource {
  public baseUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  public getProducts(): Observable<Product[]> {
    return this.sendRequest(RequestMethod.GET, 'products');
  }

  public saveOrder(order: Order): Observable<Order> {
    return this.sendRequest(RequestMethod.POST, 'orders', order);
  }

  private sendRequest(
    method: RequestMethod,
    url: string,
    body?: Product | Order,
  ): Observable<Product | Order> {
    const fullUrl = this.baseUrl + url;

    return this.httpClient
      .request(new HttpRequest(method, fullUrl, body))
      .pipe(map);
  }
}
