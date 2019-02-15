import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import{department} from './depart.model';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  title = 'httpinterceptors';
  blackworld:boolean;
  gender = 'male';
  message = true;
depart = 3;
bsValue = new Date();
department:department[] = [{

  name:'HR',
  id:1
},{name:'Testing',id:2},{name:'Finance',id:3},{name:'Auditteam',id:4}]
things = {
  car:'honda',
  shoes:'nike',
  vehicle:'escal'
}
things$ = Observable.of({
  car: 'Honda',
  shoes: 'Nike',
  shirt: 'Tom Ford',
  watch: 'Timex'
}).delay(1000);


course1 = {
  id:1,
  description: 'Angular For Beginners'
};

  saveemployee(empform:NgForm):void{

    console.log(empform);

  }
  success(bad:boolean):void{
  this.blackworld = true;
  }
}
