import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Job } from './job'; ersetzen durch jobangebot
import { Question } from './question';
import { Skill } from './skill';
import { Answer } from './answer';
import { QuestionAnswer } from './question_answer';
import { CurrentQuestion } from './current_question';
import { CurrentAnswer } from './currentAnswer';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getCurrentQuestionnaireQuestionsText(): Observable<Question[]>{
    return this.http.get<CurrentQuestion[]>(this.baseUrl + 'current_questionnaireQuestionsText')
  }

  getCurrentQuestionnaireAnswersText(): Observable<CurrentAnswer[]>{
    return this.http.get<CurrentAnswer[]>(this.baseUrl + 'current_questionnaireAnswersText')
  }

/*   getCurrentQuestionnaireAnswersText(): Observable<CurrentAnswer[]>{
    return this.http.get<CurrentAnswer[]>(this.baseUrl + 'current_questionnaireAnswersText')
  } */

  getAllQuestionAnswer(): Observable<QuestionAnswer>{
    return this.http.get<QuestionAnswer>(this.baseUrl + 'question_answer')
  }

 // ersetzen durch jobangebot
/*   getAllJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(this.baseUrl + 'job_post_wizard');
  } */
  getAllQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>(this.baseUrl + 'question');
  }
  getAllAnswers(): Observable<Answer[]>{
    return this.http.get<Answer[]>(this.baseUrl + 'answer');
  }

  getAllSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.baseUrl + 'skill');
  }
 // ersetzen durch jobangebot
/*   getOneJob(id: number): Observable<Job>{
    return this.http.get<Job>(this.baseUrl + 'job/id' + id);
  } */

  getOneQuestion(id: number): Observable<Question>{
    return this.http.get<Question>(this.baseUrl + 'question/id' + id);
  }

  getOneAnswer(id: number): Observable<Answer>{
    return this.http.get<Answer>(this.baseUrl + 'answer/id' + id);
  }

  getOneSkill(id: number): Observable<Skill>{
    return this.http.get<Skill>(this.baseUrl + 'skill/id' + id);
  }
  
}
