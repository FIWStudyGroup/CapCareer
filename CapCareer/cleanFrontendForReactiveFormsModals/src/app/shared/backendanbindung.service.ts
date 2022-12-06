import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPost } from './JobPost';
import { Question } from './question';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllJobPosts(): Observable<JobPost[]>{
    return this.http.get<JobPost[]>(this.baseUrl + 'job_post_wizard');
  }
  getAllQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>(this.baseUrl + 'question');
  }
  getAllAnswers(): Observable<Answer[]>{
    return this.http.get<Answer[]>(this.baseUrl + 'answer');
  }

  getOneQuestion(id: string): Observable<Question>{
    return this.http.get<Question>(this.baseUrl + 'question/' + id);
  }
}
