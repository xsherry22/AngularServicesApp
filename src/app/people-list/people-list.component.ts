import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { User } from '../user';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList: User[];
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
      this.personService.getPeopleWeb().subscribe((users) => {
      this.peopleList = users;
    });
    
  }

}
