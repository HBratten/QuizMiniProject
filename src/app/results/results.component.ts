import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  scoreList: any[];
  answerList: any[];
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getScores().subscribe(response => {
      this.scoreList = response;
    });

    this.quizService.getQuestions().subscribe(response => {
      this.answerList = response;
    });
  }
}
