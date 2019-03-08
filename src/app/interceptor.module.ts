import {Injectable, NgModule} from '@angular/core';
import {Observable} from 'rxjs';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next:
    HttpHandler): Observable<HttpEvent<any>> {
    if (req.withCredentials) {
      console.log('ok');
    } else {
      console.log('NOT ok');
    }
    
    let dupReq: HttpRequest<any>;
    dupReq = req.clone({headers: req.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000')});
    console.log(dupReq);
    return next.handle(dupReq);
  }
}

@NgModule({
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true}
  ]
})
export class InterceptorModule {
}
