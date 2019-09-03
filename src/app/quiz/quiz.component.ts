import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questionList: any[];
  username: string;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getQuestions().subscribe(response => {
      this.questionList = response;
    });
  }

  submitForm(form: NgForm) {
    this.quizService.calculateScore(form.value, this.questionList);
    form.reset();
    this.quizService.navigateToResults();
    // this.quizService.postScores(userScore);
  }
}
