import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
  public post(url: string, data: any): Observable<any> {
    return this.httpClient.get(url);
  }
  public put(url: string, data: any): Observable<any> {
    return this.httpClient.get(url);
  }
  public patch(url: string, data: any): Observable<any> {
    return this.httpClient.get(url);
  }
  public delete(url: string, data: any): Observable<any> {
    return this.httpClient.get(url);
  }
}
