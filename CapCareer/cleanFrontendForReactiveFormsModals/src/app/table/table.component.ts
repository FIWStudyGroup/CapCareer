import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backendanbindung.service';
import { JobPost } from '../shared/JobPost';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  jobpost!: JobPost[];

  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
      this.bs.getAll().subscribe(
      (
        response: JobPost[]) => {
                this.jobpost = response;
                console.log(this.jobpost);
                return this.jobpost;
        },
        error => console.log(error)
      );
    }
}
