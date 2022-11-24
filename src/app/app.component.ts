import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjemploApiDocker';

  datos:any;

  constructor(private http: HttpClient)
  {
    this.datos={
    "activity":"",
    "type":"",
    "participants":"",
    "price": "",
    "link": "",
    "key":"",
    "accessibility": ""
    }
  }


  getData() {
      return this.http.get('https://www.boredapi.com/api/activity').subscribe(
          data => {this.datos = data},
          err => console.error(err),
          () => console.log("Carga completa")
        );
        
      }

  ngOnInit(){
    this.getData();
}




}
