import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  constructor(private http: HttpClient, private router: Router) {}

  score: number = 0;
  submittedAnswers: any;
  quizQuestions: any;
  username: string;
  userResult: object;

  getQuestions(): Observable<any> {
    return this.http.get("http://localhost:9090/questions");
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost:9090/scores");
  }

  addScore(username: string, score: number): Observable<any> {
    return this.http.post("http://localhost:9090/scores", { username, score });
  }

  postScores(score: number) {
    return this.http
      .post("http://localhost:9090/scores", score)
      .subscribe(response => {
        this.userResult = response;
      });
  }

  navigateToResults() {
    this.router.navigate(["results"]);
  }

  calculateScore(form: any, questions: any): any {
    console.log(form, questions);
    this.submittedAnswers = form;
    this.quizQuestions = questions;

    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer) {
        this.score++;
      }
    }
    console.log(this.score);
    // return (this.userResult = {
    //   username: this.username,
    //   score: this.score
    // });
    this.addScore(form.username, this.score).subscribe();
  }

  returnSubmittedAnswers() {
    return this.submittedAnswers;
  }

  returnQuizQuestions() {
    return this.quizQuestions;
  }

  returnUserScore() {
    return this.score;
  }
}
