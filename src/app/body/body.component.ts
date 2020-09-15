import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscriber } from 'rxjs';
import { SearchPipe }    from '../search.pipe';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  handleSearch(value: string){
    
    this.filtro_valor = value
    
  }
  filtro_valor= '';
 


  posts = [];
  constructor(public dataService: DataService) {
   this.dataService.getData().subscribe(data => {
     
     this.posts = data;
     console.log(data);
     console.log(this.filtro_valor);
   })
   
    }
    
 

  ngOnInit(): void {
  }
 
}
