import { Component, OnInit } from "@angular/core";
import { NameService } from "../name.service";
import { italianWords, englishWords } from "../../assets/words";
import { ScoreService } from "../score.service";
import { FormControl, FormGroup } from "@angular/forms";
import { map, take, takeWhile, tap } from "rxjs/operators";
import { interval, Observable, of, timer } from "rxjs";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-translation",
  templateUrl: "./translation.component.html",
  styleUrls: ["./translation.component.css"],
})
export class TranslationComponent {
  constructor(
    private nameService: NameService,
    private scoreService: ScoreService,
    private userService: UserService,
    private router: Router
  ) {}

  wrong: boolean = false;
  correctWord: string;
  seconds: number = 300;
  disableButton: boolean = false;

  translationForm = new FormGroup({
    english: new FormControl(""),
  });

  get score(): number {
    return this.userService.getScore();
  }

  getRandomWord(array: string[]) {
    let randomNum = Math.floor(Math.random() * array.length);
    if (array.length === 0) {
      return of("No words left!");
    } else {
      return of(array[randomNum]);
    }
  }

  checkCorrect(word: string) {
    const italianIndex = italianWords.indexOf(word, 0);
    let englishWord = ''
    try {
        englishWord = this.translationForm.value.english.toLowerCase();
    } catch (e) {
      console.error('Null')
    }
    if (englishWord === englishWords[italianIndex]) {
      const index = englishWords.indexOf(this.translationForm.value.english, 0);
      console.log(index)
      if (index > -1) {
        italianWords.splice(index, 1);
        englishWords.splice(index, 1);
      }
      return true;
    }
    return false;
  }

  words$ = italianWords;

  word$ = this.getRandomWord(italianWords);

  checkWord$;

  scoreChanger$ = timer(0, 5000).pipe(
    take(this.seconds),
    tap(() => {
      this.userService.changeScore();
    })
  )

  timer$ = timer(0, 1000).pipe(
    take(this.seconds),
    map(() => {
                  // this.userService.changeScore();
      if (this.seconds === 1) {
        this.translationForm.disable();
        this.disableButton = true;
        this.router.navigate(["/scoreboard"]);
      }
      return --this.seconds * 1000;
    })
  );

  get name(): string {
    return this.nameService.name;
  }

  get average(): number {
    return this.userService.getAverageScore()
  }

  onSubmit() {
    this.checkWord$ = this.word$
      .pipe(
        tap((word) => {
          if (this.checkCorrect(word) === true) {
            this.userService.addScore();
            this.wrong = false;
          } else {
            this.correctWord = englishWords[italianWords.indexOf(word, 0)];
            this.wrong = true;
          }
        })
      )
      .subscribe();

    this.word$ = this.getRandomWord(italianWords);
  }
}
