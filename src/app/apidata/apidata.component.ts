import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {

  constructor(private myapi:ApiService) {this.putData() }
  putData=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.apisData=data
      }
    )
  }
  apisData:any=[]


  ngOnInit(): void {
  }

}
