import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPost } from './JobPost';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/job_post_wizard';

  constructor(private http: HttpClient) { }

  getAll(): Observable<JobPost[]>{
    return this.http.get<JobPost[]>(this.baseUrl);
  }
}
