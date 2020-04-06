import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
  export class UserFormComponent implements OnInit {
    model = new User();
    responseMessage = "Pending";
  
    constructor(private personService: PersonService) { }

    ngOnInit(): void {}

    onSubmit(){
      this.personService.postUserWeb(this.model).subscribe((response) =>{
        this.responseMessage = response.result;
      });
    }
    get currentMessage(){
      return this.responseMessage;
    }

    get diagnostic() {
      return JSON.stringify(this.model)
    };

  }
