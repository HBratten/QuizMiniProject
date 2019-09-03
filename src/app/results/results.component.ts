import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  score: any;
  // answerList: any[];
  submittedAnswers: any;
  quizQuestions: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    // this.quizService.getScores().subscribe(response => {
    //   this.scoreList = response;
    // });
    // this.quizService.getQuestions().subscribe(response => {
    //   this.answerList = response;
    // });
    this.quizQuestions = this.quizService.returnQuizQuestions();
    this.submittedAnswers = this.quizService.returnSubmittedAnswers();
    this.score = this.quizService.returnUserScore();
    console.log(this.quizQuestions, this.submittedAnswers);
  }
}
