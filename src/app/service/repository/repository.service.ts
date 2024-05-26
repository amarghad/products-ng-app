import {Identified} from "../../models/identified.model";
import {HttpSecretary} from "../../utils/http-secretary";
import {PageRequest} from "../../utils/page-request";

export interface RepositoryService<T extends Identified> {

  search(keyword : string, pageRequest : PageRequest) : HttpSecretary<Array<T>>;
  get(id : number | string) : HttpSecretary<T>;
  delete(element : T) : HttpSecretary<T>;
  update(element : T) : HttpSecretary<T>;
  save(element : T) : HttpSecretary<T>;

}
