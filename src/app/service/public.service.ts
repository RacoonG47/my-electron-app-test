import {Injectable} from "@angular/core";
import {environment} from "src/environments/environment";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private serverUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getPublicService() {
    console.log('sucess');
    
    return this.http.get<any>(this.serverUrl);
  }
}
