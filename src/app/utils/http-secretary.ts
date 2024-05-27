import {Subject} from "rxjs";

export enum SecretaryStatus {
  STARTED,
  LOADING,
  LOADED,
  FAILED
}

export class HttpSecretary<T> {

  public static readonly STATUS = SecretaryStatus;

  public status$ : Subject<SecretaryStatus> = new Subject<SecretaryStatus>();
  public output$ : Subject<T> = new Subject<T>();



}
