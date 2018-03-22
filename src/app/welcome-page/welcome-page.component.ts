import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private http: Http) {}
  httpdata;

  ngOnInit() {
    this.http.get("http://192.168.0.174:3001/getRecommendations?client=web&call_tag=stylemachine&size=15&position=0&attempt=0&user=5724&project=2226&collection=200&category=16&client-tag=women_apparels").
    //this.http.get("http://apparelsapis.ambertag.com/getRecommendations?client=web&call_tag=stylemachine&size=15&position=0&attempt=0&user=5724&project=2226&collection=200&category=16&client-tag=women_apparels").
      map(
         (response) => response.json()
      ).
      subscribe(
        (data) => {this.displaydata(data);}
     )
      
  }
  displaydata(data) {this.httpdata = data;}
}
