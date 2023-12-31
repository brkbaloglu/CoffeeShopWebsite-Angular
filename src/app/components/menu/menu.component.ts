import { Component } from '@angular/core';
import { MenuServiceService } from 'src/app/services/menu-service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private service: MenuServiceService){}

  menuitems:any;
  ngOnInit():void{
    this.menuitems = this.service.menuitems;
  }
}

