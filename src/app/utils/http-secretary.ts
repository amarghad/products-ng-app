import {Subject} from "rxjs";

enum Status {
  STARTED,
  LOADING,
  LOADED,
  FAILED
}

export class HttpSecretary<T> {

  public static readonly STATUS = Status;

  public status$ : Subject<Status> = new Subject<Status>();
  public output$ : Subject<T> = new Subject<T>();



}
