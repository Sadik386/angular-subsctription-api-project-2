import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, User } from '../../services/api.service';

@Component({
  selector: 'app-data-table-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table-page.component.html',
})
export class DataTablePageComponent implements OnInit {
  users: User[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  printTable() {
    window.print();
  }
}