import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entreprises:any;

  constructor(private router:Router,
              public http:Http,
              private authService:AuthService) { }

  ngOnInit() {
    // this.http.get('http://localhost:8080/list').map(resp=>resp.json())
    //   .subscribe(data=>{
    //     this.entreprises =data;
    //     console.log(data);
    //   },err=>{
    //     console.log(err);
    //   })
  }

  onLoadServer(id:number){
    this.router.navigate(['/servers',5,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'});
  }

  onLogIn(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }
}
