import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { PublicService } from './service/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-electron-app';

  constructor(private publicService: PublicService){
  }

  getPublicService(){
    this.publicService.getPublicService().subscribe(res => {
      console.log('Response: ', res)
    }, error => {
      console.log('Doslo je do pogreske: ', error)
      catchError(error)
    })
  }
}
