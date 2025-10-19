import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-data-table-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table-page.component.html',
  styleUrls: ['./data-table-page.component.css']
})
export class DataTablePageComponent implements OnInit {
  users: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  printTable() {
    const printContent = document.getElementById('userTable')?.outerHTML;
    const printWindow = window.open('', '', 'width=900,height=600');
    if (printWindow && printContent) {
      printWindow.document.write(`
        <html><head><title>Print Table</title></head><body>
        ${printContent}
        </body></html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }
}
