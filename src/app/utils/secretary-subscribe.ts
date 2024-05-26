import {HttpSecretary} from "./http-secretary";
import {HttpRequest} from "@angular/common/http";
import {map, Observable} from "rxjs";

export function secretarySubscribe (target: any, propertyName: string, descriptor: PropertyDescriptor) {
  // Call the original method
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const secretary = new HttpSecretary<any>();
    secretary.status$.next(HttpSecretary.STATUS.LOADING);

    const result : Observable<any> = originalMethod.apply(this, args);
    result.subscribe({
      next: out => {
        secretary.status$.next(HttpSecretary.STATUS.LOADED);
        secretary.output$.next(out);
      }
    });

    return secretary;
  };

  return descriptor;
}
