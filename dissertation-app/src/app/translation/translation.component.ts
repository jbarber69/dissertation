import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { englishWords, italianWords } from '../../assets/words';
import { NameService } from '../name.service';
import { ScoreService } from '../score.service';

@Component({
  selector: "app-translation",
  templateUrl: "./translation.component.html",
  styleUrls: ["./translation.component.css"],
})
export class TranslationComponent implements OnInit {
  constructor(
    private nameService: NameService,
    private scoreService: ScoreService,
  ) {}

  ngOnInit(): void {}

  translationForm = new FormGroup({
    english: new FormControl(""),
  });

  get score(): number {
    return this.scoreService.score;
  }

  getRandomWord(array: string[]) {
    let randomNum = Math.floor(Math.random() * array.length);
    if(array.length === 0){
      return of('No words left!')
    }
    else{
    return of(array[randomNum]);
    }
  }

  checkCorrect(word: string) {
    const italianIndex = italianWords.indexOf(word, 0);
    if (this.translationForm.value.english === englishWords[italianIndex]) {
      const index = englishWords.indexOf(this.translationForm.value.english, 0);
      if (index > -1) {
        italianWords.splice(index, 1);
      }
      return true;
    }
    return false;
  }

  words$ = italianWords;

  word$ = this.getRandomWord(italianWords);

  checkWord$

  get name(): string {
    return this.nameService.name;
  }

  onSubmit() {
    this.checkWord$ = this.word$.pipe(
    tap((word) => {
      console.log(word)
      if (this.checkCorrect(word) === true) {
        this.scoreService.score += 1;
      }
    })).subscribe()

    this.word$ = this.getRandomWord(italianWords);
    console.log(italianWords);
    console.log(this.translationForm.value);
  }
}
