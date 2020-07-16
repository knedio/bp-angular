import { Component, OnInit } from '@angular/core';
import { TableField } from '_shared/models/table/table-field/table-field.model'
import { User } from '_shared/models/user/user.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fields: TableField[] = [
    {
      name: 'firstname',
      title: 'First Name',
    }, {
      name: 'lastname',
      title: 'Last Name',
    }, {
      name: 'created_at',
      title: 'Created',
    },  {
      name: '',
      title: 'Actions',
      component: '__actions',
    }, 
  ]

  data: User[] = [
    {
      id: 1,
      firstname: 'Karl',
      lastname: 'Edio',
      created_at: '2020-05-02',
      updated_at: '2020-05-02',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
